import axios from "axios";

export interface JsCode {
  compiled: { outputText: string };
}

export interface TsCode {
  code: string;
}

/**
 * @returns {JsCode} if parameter output is "js"
 * @returns {TsCode} if parameter output is "js"
 */
export async function fetchCode(file: string, output: "js" | "ts"): Promise<JsCode | TsCode> {
  const url = new URL("http://localhost:3000/code");
  url.searchParams.set("fileName", file);
  url.searchParams.set("outputLanguage", output);
  const response = await axios.get<JsCode | TsCode>(url.toString());

  return response.data;
}
