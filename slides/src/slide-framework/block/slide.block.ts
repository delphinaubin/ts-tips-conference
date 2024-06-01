import { RenderBlock } from "../render-block";
import { ChapterComputationContext } from "../chapter-computation-context.type";

export type SlideSingleTransition = "none" | "fade" | "slide" | "convex" | "concave" | "zoom";

export type SlideTransition =
  | SlideSingleTransition
  | `${SlideSingleTransition}-in ${SlideSingleTransition}-out`
  | "auto-animate"
  | `auto-animate ${SlideSingleTransition}-out`;

export type SlideIndex = number & { __flavoring?: "SlideIndex" };
export type ChapterIndex = number & { __flavoring?: "ChapterIndex" };

export class Slide extends RenderBlock {
  public index: SlideIndex = 0;
  public chapterIndex: ChapterIndex | null = 0;

  private transition: SlideTransition = "slide";

  withChild(children: RenderBlock[]): RenderBlock {
    return new Slide(children);
  }

  withTransition(transition: SlideTransition = "slide"): this {
    this.transition = transition;
    return this;
  }

  override getHtmlElement(): HTMLElement {
    const htmlElement = document.createElement("section");

    if (this.transition.includes("auto-animate")) {
      htmlElement.setAttribute("data-auto-animate", "auto");
      const otherAnimation = /^auto-animate (.*-out)$/.exec(this.transition);
      if (otherAnimation) {
        console.log({ otherAnimation });
        htmlElement.setAttribute("data-transition", otherAnimation[1]);
      }
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
