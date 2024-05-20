import express, { Request, Response } from "express";
import cors from "cors";
import { getCodeContent } from "./get-code-content";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/code", async (req: Request, res: Response) => {
  const { fileName, outputLanguage } = req.query;

  if (typeof fileName !== "string" || typeof outputLanguage !== "string") {
    return res.status(400).send();
  }

  const response = await getCodeContent(fileName, outputLanguage);
  if (response === null) {
    return res.status(404).send();
  }

  res.header("Content-Type", "application/json").send(JSON.stringify(response));
});

app.listen(port, () => {
  console.log(`Slides API listening on port ${port}`);
});
