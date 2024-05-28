import "./resume.block.css";

import { RenderBlock } from "../../render-block";
import { ResumeSlideContent } from "../../../slide-content/slides";

export class Resume extends RenderBlock {
  constructor(private readonly resumeSlideContent: Omit<ResumeSlideContent, "type">) {
    super([]);
  }

  override getHtmlElement(): HTMLElement {
    const element = document.createElement("div");
    element.classList.add("slide-resume");

    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerHTML = this.resumeSlideContent.title;

    element.appendChild(title);

    const list = document.createElement("ul");
    list.classList.add("list");

    this.resumeSlideContent.bullets.forEach((bullet, index) => {
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
