import { SlideContent } from "./slides";
import { TitleSlide } from "../slide/title.slide";
import { ImageSlide } from "../slide/image.slide";
import { CodeSlide } from "../slide/code.slide";
import { FirstSlide } from "../slide/first.slide";
import { Slide } from "../slide-framework/block/slide.block";
import { CompiledCodeSlide } from "../slide/compiled-code.slide";
import { ResumeSlide } from "../slide/resume.slide";
import { TsFeatureSlide } from "../slide/ts-feature.slide";

export function getSlides(slides: SlideContent[]): Slide[] {
  return slides.map((slide): Slide => getSlide(slide).withTransition(slide.transition));
}

function getSlide(slide: SlideContent): Slide {
  const slideType = slide.type;

  switch (slideType) {
    case "first":
      return new FirstSlide(slide.imageUrl, slide.title, slide.backgroundImage);
    case "title":
      return new TitleSlide(slide.title, slide.subtitle);
    case "image":
      return new ImageSlide(slide.imageSrc, slide.title);
    case "code":
      return new CodeSlide(slide.fileName, slide.title, slide.steps, slide.language);
    case "multiCode":
      return new CodeSlide(slide.fileNames, slide.title, slide.steps, slide.languages);
    case "resume":
      return new ResumeSlide(slide);
    case "compiledCode":
      return new CompiledCodeSlide(slide.fileName, slide.title);
    case "tsFeature":
      return new TsFeatureSlide();
    default:
      // throw new Error(`Unknown slide type: ${slide.type}`); // 👍 Bof

      // const unknownType: never = slideType; // 👍 Bien
      // throw new Error(`Unknown slide type: ${unknownType}`);

      return assertNever(slide); // 🚀 Encore mieux
  }
}

/**
 * @see never chapter
 */
export function assertNever(x: never): never {
  throw new Error(`Unexpected slide type: ${x}`);
}
