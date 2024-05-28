// @ts-strict-ignore
import { Slide } from "../slide-framework/block/slide.block";
import { TitleSlide } from "../slide/title.slide";
import { Title } from "../slide-framework/block/title/title.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { Chapter } from "../slide/chapter.slide";

export function computeSummarySlide(slides: Slide[] = []): Slide {
  return new Slide([
    Title.withText("Summary"),
    ...getAllTitleSlidesTitle(slides).map((s) => Subtitle.withText(s)),
  ]);
}

function getAllTitleSlidesTitle(slides: Slide[]): string[] {
  return slides
      .filter(isChapter)
      .flatMap((chapter: Chapter) => chapter.getSlides())
      .filter(isTitleSlide)
      .map((slide: TitleSlide) => slide.title);
}

function isChapter(slide: Slide): boolean {
  return slide instanceof Chapter;
}

function isTitleSlide(slide: Slide): boolean {
  return slide instanceof TitleSlide;
}
