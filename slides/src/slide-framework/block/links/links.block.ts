// @ts-strict-ignore
import "./links.block.css";

import { RenderBlock } from "../../render-block";
import { LinksSlideContent } from "../../../slide-content/slides";

export class Links extends RenderBlock {
  constructor(private readonly linksSlideContent: Omit<LinksSlideContent, "type">) {
    super([]);
  }

  override getHtmlElement(): HTMLElement {
    const element = document.createElement("div");
    element.classList.add("slide-links");

    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerText = this.linksSlideContent.title;

    element.appendChild(title);

    const list = document.createElement("ul");
    list.classList.add("list");

    this.linksSlideContent.links.forEach((link) => {
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
