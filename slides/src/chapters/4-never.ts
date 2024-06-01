import { Chapter } from "../slide/chapter.slide";
import { getSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";
import { TsFeatureSlide } from "../slide/ts-feature.slide";

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
      .addStep("1-7")
      .addStep("1-8")
      .addStep("1-9")
      .addStep("1-13")
      .addStep("3-17")
      .addStep("6-20")
      .addStep("11-25")
      .addStep("1-7")
      .build(),
    transition: "slide-in none-out",
  },
  {
    type: "code",
    fileName: "never-fixed.ts",
    steps: CodeStepsBuilder.createSteps()
      .addStep("1-10")
      .addStep("18-23 ")
      .addStep("18-29")
      .build(),
    transition: "none-in slide-out",
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

export const chapter4Slides = Chapter.withSlides([
  ...getSlides(slidesContent),
  new TsFeatureSlide(),
]);
