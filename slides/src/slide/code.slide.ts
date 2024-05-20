import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { CodeFromFile } from "../slide-framework/block/code/code-from-file.block";

export class CodeSlide extends Slide {
  constructor(
    public readonly fileName: string,
    public readonly title?: string,
  ) {
    super([
      ...(title ? [Subtitle.withText(title)] : []),
      CodeFromFile.fromFile(fileName),
    ]);
  }
}
