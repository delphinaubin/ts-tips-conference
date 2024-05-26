import { SlideContent } from "./slides";
import { TitleSlide } from "../slide/title.slide";
import { ImageSlide } from "../slide/image.slide";
import { CodeSlide } from "../slide/code.slide";
import { SpeakersSlide } from "../slide/speakers.slide";
import { FirstSlide } from "../slide/first.slide";
import { LinksSlide } from "../slide/links.slide";
import { Slide } from "../slide-framework/block/slide.block";
import { CompiledCodeSlide } from "../slide/compiled-code.slide";

export function getSlides(slides: SlideContent[]): Slide[] {
  return slides.map((slide) => {
    switch (slide.type) {
      case "first":
        return new FirstSlide(slide.imageUrl, slide.title, slide.footer);
      case "title":
        return new TitleSlide(slide.title, slide.subtitle).withTransition("none-in slide-out");
      case "image":
        return new ImageSlide(slide.imageSrc, slide.title);
      case "code":
        return new CodeSlide(slide.fileName, slide.title, slide.steps, slide.language);
      case "speakers":
        return new SpeakersSlide(slide.speakers);
      case "links":
        return new LinksSlide(slide);
      case "compiledCode":
        return new CompiledCodeSlide(slide.fileName, slide.title);
    }
  });
}
