import axios from "axios";

export interface JsCode {
  jsCode: { outputText: string };
}

export interface TsCode {
  tsCode: string;
}

function getFileUrl(file: string, output: "js" | "ts"): string {
  const url = new URL("http://localhost:3000/code");
  url.searchParams.set("fileName", file);
  url.searchParams.set("outputLanguage", output);
  return url.toString();
}

/**
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
 * 👇
 *
 */

/**
 * @returns {JsCode} if output is "js"
 * @returns {TsCode} if output is "ts"
 */
export async function fetchCode(file: string, output: "js" | "ts"): Promise<JsCode | TsCode> {
  const url = getFileUrl(file, output);
  const response = await axios.get<JsCode | TsCode>(url);
  return response.data;
}
