import { Slide } from "../slide-framework/block/slide.block";
import { ChapterComputationContext } from "../slide-framework/chapter-computation-context.type";

export class ChapterGroup extends Slide {
  static withSlides(slides: Slide[]): ChapterGroup {
    return new ChapterGroup(slides);
  }

  computeChapterAndSlideIndexes(context: ChapterComputationContext) {
    this.chapterIndex = context.lastChapterIndex + 1;
    this.index = 0;
    this.slidesInChapter.forEach((slide) => {
      slide.computeChapterAndSlideIndexes({
        currentSlide: 0,
        lastChapterIndex: context.lastChapterIndex,
        currentChapter: this.chapterIndex,
      });
    });
    context.lastChapterIndex = this.chapterIndex;
  }

  constructor(private readonly slidesInChapter: Slide[]) {
    super(slidesInChapter);
  }
}
