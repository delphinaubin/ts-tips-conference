import { RenderBlock } from "./render-block";

export class Image extends RenderBlock {
  static withSrc(src: string): Image {
    return new Image(src);
  }

  constructor(private readonly src: string) {
    super([]);
  }

  override getHtmlElement(): HTMLElement {
    const element = document.createElement("img");
    element.src = this.src;
    return element;
  }
}
