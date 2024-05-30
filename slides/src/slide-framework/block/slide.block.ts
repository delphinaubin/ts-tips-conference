// @ts-strict-ignore
import { RenderBlock } from "../render-block";
import { ChapterComputationContext } from "../chapter-computation-context.type";

export type SlideSingleTransition = "none" | "fade" | "slide" | "convex" | "concave" | "zoom";

export type SlideTransition =
  | SlideSingleTransition
  | `${SlideSingleTransition}-in ${SlideSingleTransition}-out`
  | "auto-animate";

const chapterAndSlideIndexRegexp = /#\/([0-9])(\/[0-9])?/;

export type SlideIndex = number;
export type ChapterIndex = number;

export class Slide extends RenderBlock {
  public index: SlideIndex = 0;
  public chapterIndex: ChapterIndex = 0;

  private transition: SlideTransition = "slide";

  getIndex(): SlideIndex {
    const indexInUrl = +window.location.hash.replace(chapterAndSlideIndexRegexp, "$2");
    if (Number.isNaN(indexInUrl)) {
      return 0;
    }
    return indexInUrl;
  }

  getChapterIndex(): ChapterIndex {
    return +window.location.hash.replace(chapterAndSlideIndexRegexp, "$1");
  }


  withChild(children: RenderBlock[]): RenderBlock {
    return new Slide(children);
  }

  withTransition(transition: SlideTransition = "slide"): this {
    this.transition = transition;
    return this;
  }

  override getHtmlElement(): HTMLElement {
    const htmlElement = document.createElement("section");

    if (this.transition === "auto-animate") {
      htmlElement.setAttribute("data-auto-animate", "auto");
    } else {
      htmlElement.setAttribute("data-transition", this.transition);
    }

    return htmlElement;
  }

  computeChapterAndSlideIndexes(context: ChapterComputationContext) {
    this.index = ++context.currentSlide;
    this.chapterIndex = context.currentChapter;
  }
}
