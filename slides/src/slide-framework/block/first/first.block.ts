import "./first.block.css";

import { RenderBlock } from "../../render-block";

export class FirstBlock extends RenderBlock {
  constructor(public imageUrl: string, public title: string, public footer: string) {
    super([]);
  }

  override getHtmlElement(): HTMLElement {
    const firstElement = document.createElement("div");
    firstElement.classList.add("first-block");

    firstElement.innerHTML = `
      <img class="first-block__image" src="${this.imageUrl}" alt="${this.title}" />
      <h1 class="first-block__title"> ${this.title} </h1>
    `;

    // <div class="first-block__footer"> ${this.footer} </div>
    return firstElement;
  }
}
