import { Slide } from "./slide-framework/slide.block";
import { CodeFromFile } from "./slide-framework/code-from-file.block";
import { Subtitle } from "./slide-framework/subtitle.block";
import { CompiledCodeFromFile } from "./slide-framework/compiled-code-from-file.block";

export class CompiledCodeSlide extends Slide {
  constructor(
    public readonly fileName: string,
    public readonly title?: string,
  ) {
    super([
      ...(title ? [Subtitle.withText(title)] : []),
      CodeFromFile.fromFile(fileName),
      CompiledCodeFromFile.fromFile(fileName),
    ]);
  }
}
