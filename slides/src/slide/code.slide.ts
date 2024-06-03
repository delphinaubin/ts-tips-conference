import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { CodeFromFile } from "../slide-framework/block/code/code-from-file.block";
import { CodeLanguage, CodeSteps } from "../slide-framework/block/code/code.block";

function getCodeBlock(fileName: string, steps?: CodeSteps, language?: CodeLanguage): CodeFromFile {
  const codeBlock = CodeFromFile.fromFile(fileName);
  if (steps) {
    codeBlock.withSteps(steps);
  }
  if (language) {
    codeBlock.withLanguage(language);
  }
  return codeBlock;
}

export class CodeSlide extends Slide {
  constructor(
    public readonly fileName: string,
    public readonly title?: string,
    steps?: CodeSteps,
    language?: CodeLanguage,
  ) {
    super([...(title ? [Subtitle.withText(title)] : []), getCodeBlock(fileName, steps, language)]);
  }
}
