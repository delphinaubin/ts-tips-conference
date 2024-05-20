import { Code } from "./code.block";
import { fetchCode } from "../client/code.client";

export class CodeFromFile extends Code {
  static fromFile(fileName: string): CodeFromFile {
    return new CodeFromFile(fileName);
  }

  constructor(private readonly fileName: string) {
    super();
  }

  override async getCode() {
    const fileContent = await fetchCode(this.fileName, "ts");
    return fileContent.code;
  }
}
