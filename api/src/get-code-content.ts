import ts, { TranspileOutput } from "typescript";
import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);

export async function getCodeContent(
  fileName: string,
  outputLanguage: string,
): Promise<{ code: string } | { compiled: TranspileOutput } | null> {
  try {
    const codeBuffer = await readFile(`./code-samples/${fileName}`);
    const code = codeBuffer.toString();
    if (outputLanguage === "ts") {
      return {
        code,
      };
    }
    if (outputLanguage === "js") {
      const compiled = ts.transpileModule(code, {
        compilerOptions: {
          module: ts.ModuleKind.ESNext,
          target: ts.ScriptTarget.ESNext,
        },
      });
      return {
        compiled,
      };
    }
  } catch (e) {
    console.warn(e);
  }
  return null;
}
