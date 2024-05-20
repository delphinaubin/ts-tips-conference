import { RenderBlock } from "./render-block";

export type SlideSingleTransition =
  | "none"
  | "fade"
  | "slide"
  | "convex"
  | "concave"
  | "zoom";

export type SlideTransition =
  | SlideSingleTransition
  | `${SlideSingleTransition}-in ${SlideSingleTransition}-out`;

export class Slide extends RenderBlock {
  private transition: SlideTransition = "slide";

  withChild(children: RenderBlock[]): RenderBlock {
    return new Slide(children);
  }

  withTransition(transition: SlideTransition): this {
    this.transition = transition;
    return this;
  }

  override getHtmlElement(): HTMLElement {
    const htmlElement = document.createElement("section");
    htmlElement.setAttribute("data-transition", this.transition);
    return htmlElement;
  }
}
