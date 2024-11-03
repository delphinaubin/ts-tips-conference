import ts, { TranspileOutput } from "typescript";
import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);

export async function getCodeContent(
  fileName: string,
  outputLanguage: string,
): Promise<{ tsCode: string } | { jsCode: TranspileOutput } | null> {
  try {
    const codeBuffer = await readFile(`./code-samples/${fileName}`);
    const tsCode = codeBuffer.toString();
    if (outputLanguage === "ts") {
      return {
        tsCode,
      };
    }
    if (outputLanguage === "js") {
      const compiled = ts.transpileModule(tsCode, {
        compilerOptions: {
          module: ts.ModuleKind.ESNext,
          target: ts.ScriptTarget.ESNext,
        },
      });
      return {
        jsCode: compiled,
      };
    }
  } catch (e) {
    console.warn(e);
  }
  return null;
}
