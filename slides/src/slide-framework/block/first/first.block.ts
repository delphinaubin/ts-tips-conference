import "./first.block.css";

import { RenderBlock } from "../../render-block";

export class FirstBlock extends RenderBlock {
  constructor(
    public title: string,
    public imageUrl?: string,
  ) {
    super([]);
  }

  override getHtmlElement(): HTMLElement {
    const containerElement = document.createElement("div");

    if (this.imageUrl) {
      const imageElement = document.createElement("img");
      imageElement.src = this.imageUrl;
      imageElement.className = "first-block__image";
      containerElement.appendChild(imageElement);
    }

    const h1 = document.createElement("h1");
    h1.classList.add("first-block__title");
    h1.innerHTML = this.title;
    containerElement.appendChild(h1);
    return containerElement;
  }
}
