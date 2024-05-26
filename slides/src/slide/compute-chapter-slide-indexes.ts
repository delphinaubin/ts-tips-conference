import { Chapter } from "./chapter.slide";
import { ChapterComputationContext } from "../slide-framework/chapter-computation-context.type";

export function computeChapterSlideIndexes(this: Chapter, context: ChapterComputationContext) {
  this.chapterIndex = context.lastChapterIndex + 1;
  this.index = 0;
  this.getSlides().forEach((slide) => {
    slide.computeChapterAndSlideIndexes({
      currentSlide: 0,
      lastChapterIndex: context.lastChapterIndex,
      currentChapter: this.chapterIndex,
    });
  });
  context.lastChapterIndex = this.chapterIndex;
}
