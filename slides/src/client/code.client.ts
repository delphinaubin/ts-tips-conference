import axios from "axios";

interface Compiled {
  compiled: { outputText: string; diagnostics: unknown[] };
}

interface NotCompiled {
  code: string;
}

type Code = Compiled | NotCompiled;

export async function fetchCode(file: string, language: "js"): Promise<Compiled>;
export async function fetchCode(file: string, language: "ts"): Promise<NotCompiled>;
export async function fetchCode(file: string, output: "js" | "ts"): Promise<Code> {
  const url = new URL("http://localhost:3000/code");
  url.searchParams.set("fileName", file);
  url.searchParams.set("outputLanguage", output);
  const response = await axios.get<Compiled | NotCompiled>(url.toString());
  return response.data;
}
