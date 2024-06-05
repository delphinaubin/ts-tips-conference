import { RenderBlock } from "../../render-block";

type CodeSingleLine = `${number}` | `${number}-${number}`;

type CodeLines =
  | CodeSingleLine
  | `${CodeSingleLine},${CodeSingleLine}`
  | `${CodeSingleLine},${CodeSingleLine},${CodeSingleLine}`
  | `${CodeSingleLine},${CodeSingleLine},${CodeSingleLine},${CodeSingleLine}`
  | `${CodeSingleLine},${CodeSingleLine},${CodeSingleLine},${CodeSingleLine},${CodeSingleLine}`;

export type CodeSteps = {
  __type: "CodeSteps";
} & string;

export class CodeStepsBuilder {
  private steps: CodeLines[] = [];

  static createSteps(): CodeStepsBuilder {
    return new CodeStepsBuilder();
  }
  addStep(step: CodeLines): this {
    this.steps.push(step);
    return this;
  }

  build(): CodeSteps {
    return this.steps.join("|") as CodeSteps;
  }
}

export type CodeLanguage = "typescript" | "ts" | "html" | "json" | "javascript" | "js";

export abstract class Code extends RenderBlock {
  private steps: CodeSteps | null = null;
  private language: CodeLanguage = "typescript";

  constructor() {
    super([]);
  }

  withSteps(steps: CodeSteps): this {
    this.steps = steps;
    return this;
  }
  withLanguage(language: CodeLanguage): this {
    this.language = language;
    return this;
  }

  protected abstract getCode(): string | Promise<string>;

  override async getHtmlElement(): Promise<HTMLElement> {
    const codeLines = await this.getCode();
    const preElement = document.createElement("pre");
    preElement.className = `language-${this.language}`;
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
