export abstract class RenderBlock {
  constructor(protected readonly children: RenderBlock[]) {
    this.children = children;
  }

  abstract getHtmlElement(): Promise<HTMLElement> | HTMLElement;

  async render(): Promise<HTMLElement> {
    const element = await this.getHtmlElement();
    const childrenElements = await Promise.all(
      this.children.map(async (child) => await child.render()),
    );
    childrenElements.forEach((childElement) => element.append(childElement));
    return element;
  }
}
