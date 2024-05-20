import { Code } from "./code.block";

export class CodeFromText extends Code {
  constructor(private readonly code: string) {
    super();
  }

  protected override getCode() {
    return this.code;
  }
}
