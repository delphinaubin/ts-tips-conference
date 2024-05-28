import { Chapter } from "../slide/chapter.slide";
import { getSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";
import { TsFeatureSlide } from "../slide/ts-feature.slide";

// TODO ALO gérer le truc

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "Never say <i>never</i>",
    subtitle: "Chapter 4.",
  },
  {
    type: "code",
    fileName: "never.ts",
    steps: CodeStepsBuilder.createSteps()
      .addStep("1-4")
      .addStep("1-4,7-14")
      .addStep("16-25")
      .addStep("27-29")
      .addStep("27-29,31-36,39-40")
      .addStep("27-29,31-40")
      .build(),
  },
  {
    type: "resume",
    title: "<i>never</i> is useful to...",
    bullets: [
      `Ensure unreachable`, // (code // function)
      `"Disable" some value in a union type`,
    ],
  },
];

export const chapter4Slides = Chapter.withSlides([...getSlides(slidesContent), new TsFeatureSlide()]);
