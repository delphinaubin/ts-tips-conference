import { Slide } from "../slide-framework/block/slide.block";
import { TitleSlide } from "../slide/title.slide";
import { Title } from "../slide-framework/block/title/title.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";

export function computeSummarySlide(slides: Slide[] = []): Slide {
  return new Slide([
    Title.withText("Summary"),
    ...getAllTitleSlidesTitle(slides).map((s) => Subtitle.withText(s)),
  ]);
}

// 🙅‍♂️ Pas bien
// function getAllTitleSlidesTitle(slides: Slide[]): string[] {
//   return (slides.filter(slide => slide instanceof TitleSlide) as TitleSlide[]).map(slide => slide.title);
// }

// 👍 Bien
// function getAllTitleSlidesTitle(slides: Slide[]): string[] {
//   return slides.filter((slide): slide is TitleSlide => slide instanceof TitleSlide).map(slide => slide.title);
// }

// 🚀 Encore mieux
function getAllTitleSlidesTitle(slides: Slide[]): string[] {
  return slides.filter(isTitleSlide).map((slide) => slide.title);
}

function isTitleSlide(slide: Slide): slide is TitleSlide {
  return slide instanceof TitleSlide;
}
