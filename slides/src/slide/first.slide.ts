import "./first.slide.css";
import { FirstBlock } from "../slide-framework/block/first/first.block";
import { Slide } from "../slide-framework/block/slide.block";

export class FirstSlide extends Slide {
  constructor(
    title: string,
    imageUrl?: string,
    private readonly backgroundImage?: string,
    private readonly overlay?: {
      color: string;
      opacity: number;
    },
  ) {
    super([new FirstBlock(title, imageUrl)]);
  }

  override getHtmlElement(): HTMLElement {
    const slideElement = super.getHtmlElement();
    if (this.backgroundImage) {
      slideElement.setAttribute("data-background-image", this.backgroundImage);
    }
    if (this.overlay) {
      slideElement.setAttribute("data-background-color", this.overlay.color);
      slideElement.setAttribute("data-background-opacity", `${this.overlay.opacity}`);
    }
    slideElement.classList.add("first-block");
    return slideElement;
  }
}
