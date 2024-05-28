import { Slide } from "../slide-framework/block/slide.block";
import { ChapterComputationContext } from "../slide-framework/chapter-computation-context.type";
import { RenderBlock } from "../slide-framework/render-block";
import { computeChapterSlideIndexes } from "./compute-chapter-slide-indexes";

export class Chapter extends Slide {
  static withSlides(slides: Slide[]): Chapter {
    return new Chapter(slides);
  }

  constructor(slidesInChapter: Slide[]) {
    super(slidesInChapter);
  }

  getSlides(): Slide[] {
    assertBlocksAreSlides(this.children);

    // // @ts-ignore
    return this.children;
  }

  computeChapterAndSlideIndexes(context: ChapterComputationContext) {
    computeChapterSlideIndexes.call(this, context);
  }
}

function assertBlocksAreSlides(blocks: RenderBlock[]): asserts blocks is Slide[] {
  if (!blocks.every((block) => block instanceof Slide)) {
    throw new Error("All given blocks must be slides");
  }
}
