import { Code } from "./code.block";
import { fetchCode } from "../../../api/code.api";

export class CodeFromFile extends Code {


  override async getCode() {
    const fileContent = await fetchCode(this.fileName, "ts");
    return fileContent["code"];


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
     *
     *
     */







  }
  static fromFile(fileName: string): CodeFromFile {
    return new CodeFromFile(fileName);
  }
  constructor(private readonly fileName: string) {
    super();
  }
}
