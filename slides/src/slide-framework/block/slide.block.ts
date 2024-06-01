import { RenderBlock } from "../render-block";
import { ChapterComputationContext } from "../chapter-computation-context.type";

type SlideSingleTransition = "none" | "fade" | "slide" | "convex" | "concave" | "zoom";

export type SlideTransition =
  | SlideSingleTransition
  | `${SlideSingleTransition}-in ${SlideSingleTransition}-out`;

export type SlideIndex = number & { __flavoring?: "SlideIndex" };
export type ChapterIndex = number & { __flavoring?: "ChapterIndex" };

export class Slide extends RenderBlock {
  public index: SlideIndex = 0;
  public chapterIndex: ChapterIndex | null = 0;

  private transition: SlideTransition | null = null;
  private isAutoAnimate = false;

  withChild(children: RenderBlock[]): RenderBlock {
    return new Slide(children);
  }

  withTransition(transition: SlideTransition | null = null): this {
    this.transition = transition;
    return this;
  }

  withAutoAnimate(autoAnimate: boolean): this {
    this.isAutoAnimate = autoAnimate;
    return this;
  }

  override getHtmlElement(): HTMLElement {
    const htmlElement = document.createElement("section");

    if (this.isAutoAnimate) {
      htmlElement.setAttribute("data-auto-animate", "auto");
      htmlElement.setAttribute("data-transition", this.transition || "none");
    } else {
      htmlElement.setAttribute("data-transition", this.transition || "slide");
    }

    return htmlElement;
  }

  computeChapterAndSlideIndexes(context: ChapterComputationContext) {
    this.index = ++context.currentSlide;
    this.chapterIndex = context.currentChapter;
  }
}
