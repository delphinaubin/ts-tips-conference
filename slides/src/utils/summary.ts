import { Slide } from "../slide-framework/block/slide.block";
import { TitleSlide } from "../slide/title.slide";
import { Title } from "../slide-framework/block/title/title.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { Chapter } from "../slide/chapter.slide";

/**
 * 👇
 */

function getAllTitleSlidesTitle(allSlides: Slide[]): string[] {
  const titleSlidesOnly = allSlides.filter(isTitleSlide);

  return titleSlidesOnly.map((slide: TitleSlide) => slide.title);
}

function isTitleSlide(slide: Slide): boolean {
  return slide instanceof TitleSlide;
}

/**
 * 👆 
 * 
 * 
 * 
 * 
 */

export function computeSummarySlide(slides: Chapter[] = []): Slide {
  return new Slide([
    Title.withText("Summary"),
    ...getAllTitleSlidesTitle(slides.flatMap((chapter: Chapter) => chapter.getSlides())).map((s) =>
      Subtitle.withText(s),
    ),
  ]);
}
