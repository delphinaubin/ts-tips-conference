import {RenderBlock} from "./render-block";

export class Subtitle extends RenderBlock {
  static withText(text: string): Subtitle {
    return new Subtitle(text);
  }

  constructor(private readonly text: string) {
    super([]);
  }

  override getHtmlElement(): HTMLElement {
    const element = document.createElement("h2");
    element.innerText = this.text;
    return element;
  }
}
