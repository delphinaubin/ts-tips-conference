import "./first.block.css";

import { RenderBlock } from "../../render-block";

export class FirstBlock extends RenderBlock {
  constructor(public imageUrl: string, public title: string, public backgroundImage?: string) {
    super([]);
  }

  override getHtmlElement(): HTMLElement {
    const firstElement = document.createElement("section");
    if (this.backgroundImage) {
      firstElement.setAttribute("data-background-image", this.backgroundImage);
    }
    firstElement.classList.add("first-block");

    firstElement.innerHTML = `
      <img class="first-block__image" src="${this.imageUrl}" />
    `;
    const h1 = document.createElement("h1");
    h1.classList.add("first-block__title");
    h1.innerHTML = this.title;
    firstElement.appendChild(h1);

    // <div class="first-block__footer"> ${this.footer} </div>
    return firstElement;
  }
}
