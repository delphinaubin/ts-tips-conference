import axios from "axios";

export interface Compiled {
  compiled: { outputText: string; diagnostics: unknown[] };
}

export interface NotCompiled {
  code: string;
}

type Code = Compiled | NotCompiled;

/**
 * @returns {Compiled} if parameter output is "js"
 * @returns {NotCompiled} if parameter output is "ts"
*/
// TODO: to remove before the presentation
export async function fetchCode(file: string, output: "js"): Promise<Compiled>;
export async function fetchCode(file: string, output: "ts"): Promise<NotCompiled>;
export async function fetchCode(file: string, output: "js" | "ts"): Promise<Code> {
  const url = new URL("http://localhost:3000/code");
  url.searchParams.set("fileName", file);
  url.searchParams.set("outputLanguage", output);
  const response = await axios.get<Compiled | NotCompiled>(url.toString());

  return response.data;
}
