import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { CodeFromFile } from "../slide-framework/block/code/code-from-file.block";
import { CodeLanguage, CodeSteps } from "../slide-framework/block/code/code.block";

function assertIsArrayOrUndefined<T>(value: T | T[] | undefined): asserts value is T[] | undefined {
  if (!Array.isArray(value) && value !== undefined) {
    throw new Error(`Value should be an array but ${value} was given`);
  }
}

function assertIsNotArrayOrUndefined<T>(
  value: T | T[] | undefined,
): asserts value is T | undefined {
  if (Array.isArray(value)) {
    throw new Error(`Value should NOT be an array but ${value} was given`);
  }
}

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
  constructor(fileName: string, title?: string, steps?: CodeSteps, language?: CodeLanguage);
  constructor(fileNames: string[], title?: string, steps?: CodeSteps[], languages?: CodeLanguage[]);
  constructor(
    public readonly fileName: string | string[],
    public readonly title?: string,
    steps?: CodeSteps | CodeSteps[],
    language?: CodeLanguage | CodeLanguage[],
  ) {
    const codeBlocks: CodeFromFile[] = [];
    if (Array.isArray(fileName)) {
      assertIsArrayOrUndefined(steps);
      assertIsArrayOrUndefined(language);

      fileName
        .map((currentFileName, index) => {
          return getCodeBlock(
            currentFileName,
            steps && steps[index],
            language !== undefined ? language[index] : undefined,
          );
        })
        .forEach((codeBlock) => codeBlocks.push(codeBlock));
    } else {
      assertIsNotArrayOrUndefined(steps);
      assertIsNotArrayOrUndefined(language);
      codeBlocks.push(getCodeBlock(fileName, steps, language));
    }

    super([...(title ? [Subtitle.withText(title)] : []), ...codeBlocks]);
  }
}
