// @ts-strict-ignore
import { Code } from "./code.block";
import { fetchCode } from "../../../api/code.api";

export class CompiledCodeFromFile extends Code {
  static fromFile(fileName: string): CompiledCodeFromFile {
    return new CompiledCodeFromFile(fileName);
  }

  constructor(private readonly fileName: string) {
    super();
  }

  override async getCode() {
    const fileContent = await fetchCode(this.fileName, "js");

    return fileContent['compiled']['outputText'];
  }
}
