import './link.css'
import { RenderBlock } from "../../render-block";

export class Link extends RenderBlock {
  private href = "#";
  private isTargetBlank = false;

  static withText(text: string): Link {
    return new Link(text);
  }

  withHref(href: string): this {
    this.href = href;
    return this;
  }

  withTargetBlank(): this {
    this.isTargetBlank = true;
    return this;
  }

  constructor(private readonly text: string) {
    super([]);
  }

  getHtmlElement(): Promise<HTMLElement> | HTMLElement {
    const a = document.createElement("a");
    a.href = this.href;
    a.className = "link"
    if (this.isTargetBlank) {
      a.setAttribute("target", "blank");
    }
    a.text = this.text;
    return a;
  }
}
