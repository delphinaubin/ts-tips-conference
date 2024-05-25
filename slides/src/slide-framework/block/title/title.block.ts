import "./title.block.css";

import { RenderBlock } from "../../render-block";

export class Title extends RenderBlock {
  static withText(text: string): Title {
    return new Title(text);
  }

  constructor(private readonly text: string) {
    super([]);
  }

  override getHtmlElement(): HTMLElement {
    const element = document.createElement("h2");
    element.classList.add("title");
    element.innerHTML = this.text;
    return element;
  }
}