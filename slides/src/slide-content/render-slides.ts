import { slides } from "./slides";
import { TitleSlide } from "../title.slide";
import { ImageSlide } from "../image.slide";
import { CodeSlide } from "../code.slide";
import { SpeakersSlide } from "../speakers.slide";

export function getSlides() {
  return slides.map((slide) => {
    switch (slide.type) {
      case "title":
        return new TitleSlide(slide.title, slide.subtitle);
      case "image":
        return new ImageSlide(slide.imageSrc, slide.title);
      case "code":
        return new CodeSlide(slide.fileName, slide.title);
      case "speakers":
        return new SpeakersSlide(slide.speakers);
    }
  });
}
