import { RenderBlock } from "./render-block";

type CodeSingleLine = `${number}` | `${number}-${number}`;

// TODO DAU: find a better way
type CodeLines =
  | CodeSingleLine
  | `${CodeSingleLine},${CodeSingleLine}`
  | `${CodeSingleLine},${CodeSingleLine},${CodeSingleLine}`;

export type CodeSteps =
  | CodeLines
  | `${CodeLines}|${CodeLines}`
  | `${CodeLines}|${CodeLines}|${CodeLines}`
  | `${CodeLines}|${CodeLines}|${CodeLines}|${CodeLines}`;


export abstract class Code extends RenderBlock {
  private steps: CodeSteps | null = null;

  constructor() {
    super([]);
  }

  withSteps(steps: CodeSteps): this {
    this.steps = steps;
    return this;
  }

  protected abstract getCode(): string | Promise<string>;

  override async getHtmlElement(): Promise<HTMLElement> {
    const codeLines = await this.getCode();
    const preElement = document.createElement("pre");
    const codeElement = document.createElement("code");
    if (this.steps) {
      codeElement.setAttribute("data-line-numbers", this.steps);
    }

    codeElement.setAttribute("data-trim", "true");
    codeElement.setAttribute("data-noescape", "true");
    codeElement.append(document.createTextNode(codeLines));
    preElement.append(codeElement);
    return preElement;
  }
}
