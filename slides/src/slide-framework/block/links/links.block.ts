import "./links.block.css";

import { RenderBlock } from "../../render-block";
import { LinkItem } from "../../../slide-content/models";

export class Links extends RenderBlock {
  constructor(private readonly links: LinkItem[]) {
    super([]);
  }

  override getHtmlElement(): HTMLElement {
    const element = document.createElement("div");
    element.classList.add("links");

    const list = document.createElement("ul");
    list.classList.add("list");

    this.links.forEach((link) => {
      const listItem = document.createElement("li");
      listItem.classList.add("list__item");

      const linkElement = document.createElement("a");
      linkElement.classList.add("links__link");
      linkElement.href = link.url;
      linkElement.innerText = link.label;

      listItem.appendChild(linkElement);
      list.appendChild(listItem);
    });

    element.appendChild(list);

    return element;
  }
}
