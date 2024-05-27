import { Chapter } from "../slide/chapter.slide";
import { getSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";

// TODO ALO gérer le truc

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "Never say <i>never</i>",
    subtitle: "Chapter 4.",
  },
  {
    type: "code",
    title: "never or the unreachable code",
    fileName: "never.ts",
    steps: CodeStepsBuilder.createSteps()
      .addStep("1-3")
      .addStep("1-5")
      .addStep("7-9")
      .addStep("2,8")
      .addStep("7-9")
      .addStep("7-11")
      .build(),
  },
];

export const chapter4Slides = Chapter.withSlides(getSlides(slidesContent));
