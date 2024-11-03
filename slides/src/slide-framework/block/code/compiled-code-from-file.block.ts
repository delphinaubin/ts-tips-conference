import { Code } from "./code.block";
import { fetchCode } from "../../../api/code.api";

export class CompiledCodeFromFile extends Code {
  override async getCode() {
    const fileContent = await fetchCode(this.fileName, "js");

    return fileContent['jsCode']['outputText'];
  }

  /**
   *
   * 👆
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */

  static fromFile(fileName: string): CompiledCodeFromFile {
    return new CompiledCodeFromFile(fileName);
  }

  constructor(private readonly fileName: string) {
    super();
  }
}
