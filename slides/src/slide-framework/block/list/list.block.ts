import "./list.block.css";

import { RenderBlock } from "../../render-block";

export class List extends RenderBlock {
  constructor(private readonly list: string[]) {
    super([]);
  }

  override getHtmlElement(): HTMLElement {
    const element = document.createElement("div");
    element.classList.add("slide-list");

    const list = document.createElement("ul");
    list.classList.add("list");

    this.list.forEach((bullet, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = bullet;
      listItem.setAttribute('data-id', index.toString());
      if(bullet === '') {
        listItem.style.opacity = '0';
      } else {
        listItem.style.opacity = '1';
      }

      list.appendChild(listItem);
    });

    element.appendChild(list);

    return element;
  }
}
