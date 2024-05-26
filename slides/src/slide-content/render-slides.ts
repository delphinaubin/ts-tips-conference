import { SlideContent } from "./slides";
import { TitleSlide } from "../slide/title.slide";
import { ImageSlide } from "../slide/image.slide";
import { CodeSlide } from "../slide/code.slide";
import { SpeakersSlide } from "../slide/speakers.slide";
import { FirstSlide } from "../slide/first.slide";
import { LinksSlide } from "../slide/links.slide";

export function getSlides(slides: SlideContent[]) {
  return slides.map((slide) => {
    switch (slide.type) {
      case "first":
        return new FirstSlide(slide.imageUrl, slide.title, slide.footer);
      case "title":
        return new TitleSlide(slide.title, slide.subtitle).withTransition("none-in slide-out");
      case "image":
        return new ImageSlide(slide.imageSrc, slide.title);
      case "code":
        return new CodeSlide(slide.fileName, slide.title);
      case "speakers":
        return new SpeakersSlide(slide.speakers);
      case "links":
        return new LinksSlide(slide);
    }
  });
}
