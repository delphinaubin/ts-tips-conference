import { SlideContent } from "./slides";
import { TitleSlide } from "../slide/title.slide";
import { ImageSlide } from "../slide/image.slide";
import { CodeSlide } from "../slide/code.slide";
import { SpeakersSlide } from "../slide/speakers.slide";
import { FirstSlide } from "../slide/first.slide";
import { Slide } from "../slide-framework/block/slide.block";
import { CompiledCodeSlide } from "../slide/compiled-code.slide";
import { LinksSlide } from "../slide/links.slide";
import { GifSlide } from "../slide/gif.slide";
import { ResumeSlide } from "../slide/resume.slide";

export function getSlides(slides: SlideContent[]): Slide[] {
  return slides.map((slide): Slide => {

    const slideType = slide.type;

    switch (slideType) {
      case "first":
        return new FirstSlide(slide.imageUrl, slide.title, slide.backgroundImage).withTransition(slide.transition)
      case "title":
        return new TitleSlide(slide.title, slide.subtitle).withTransition(slide.transition)
      case "image":
        return new ImageSlide(slide.imageSrc, slide.title).withTransition(slide.transition)
      case "gif":
        return new GifSlide(slide.gifSrc, slide.title).withTransition(slide.transition)
      case "code":
        return new CodeSlide(slide.fileName, slide.title, slide.steps, slide.language).withTransition(slide.transition)
      case "speakers":
        return new SpeakersSlide(slide.speakers).withTransition(slide.transition)
      case "resume":
        return new ResumeSlide(slide).withTransition(slide.transition)
      case "links":
        return new LinksSlide(slide).withTransition(slide.transition)
      case "compiledCode":
        return new CompiledCodeSlide(slide.fileName, slide.title).withTransition(slide.transition)
      // default:
      //   // throw new Error(`Unknown slide type: ${toto}`); // 👍 Bof

      //   // const toto: never = slideType; // 👍 Bien
      //   // throw new Error(`Unknown slide type: ${toto}`);

      //   return assertNever(slide); // 🚀 Encore mieux
    }
  });
}

/**
 * @see never chapter
 */
export function assertNever(x: never): never {
  throw new Error(`Unexpected slide type: ${x}`);
}
