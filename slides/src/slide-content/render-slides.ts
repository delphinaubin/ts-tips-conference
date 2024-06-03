import { SlideContent } from "./slides";
import { TitleSlide } from "../slide/title.slide";
import { CodeSlide } from "../slide/code.slide";
import { FirstSlide } from "../slide/first.slide";
import { Slide } from "../slide-framework/block/slide.block";
import { CompiledCodeSlide } from "../slide/compiled-code.slide";
import { ResumeSlide } from "../slide/resume.slide";
import { TsFeatureSlide } from "../slide/ts-feature.slide";
import { ListSlide } from "../slide/list.slide";

export function renderSlides(slides: SlideContent[]): Slide[] {
  return slides.map(
    (slide): Slide =>
      getSlide(slide)
        .withTransition(slide.transition)
        .withAutoAnimate(slide.autoAnimate || false),
  );
}

// TODO: remove the any
function getSlide(slide: SlideContent & any): Slide {
  const slideType = slide.type;

  switch (slideType) {
    case "first":
      return new FirstSlide(slide.imageUrl, slide.title, slide.backgroundImage);
    case "title":
      return new TitleSlide(slide.title, slide.subtitle);
    case "list":
      return new ListSlide(slide.title, slide.items);
    case "resume":
      return new ResumeSlide(slide.title, slide.bullets);
    case "code":
      return new CodeSlide(slide.fileName, slide.title, slide.steps, slide.language);
    case "multiCode":
      return new CodeSlide(slide.fileNames, slide.title, slide.steps, slide.languages);
    case "compiledCode":
      return new CompiledCodeSlide(slide.fileName, slide.title);
    case "tsFeature":
      return new TsFeatureSlide();
    default:
      throw new Error(`Unknown slide type: ${slideType}`);
  }
}
