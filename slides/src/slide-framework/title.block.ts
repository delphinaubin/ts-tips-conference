import {RenderBlock} from "./render-block";

export class Title extends RenderBlock {
  static withText(text: string): Title {
    return new Title(text);
  }

  constructor(private readonly text: string) {
    super([]);
  }

  override getHtmlElement(): HTMLElement {
    const element = document.createElement("h1");
    element.innerText = this.text;
    return element;
  }
}