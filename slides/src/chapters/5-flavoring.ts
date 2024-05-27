import { Chapter } from "../slide/chapter.slide";
import { getSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "A dash of <i>flavoring</i>",
    subtitle: "Chapter 5.",
  },
  {
    type: "code",
    title: "Avoid confusion",
    fileName: "flavoring.ts",
    steps: CodeStepsBuilder.createSteps().addStep("1-3").addStep("1-6").addStep("1-9").build(),
  },
  {
    type: "code",
    title: "Flavoring vs Branding",
    fileName: "flavoring-vs-branding.ts",
    steps: CodeStepsBuilder.createSteps()
      .addStep("1-3")
      .addStep("1-5")
      .addStep("7-9")
      .addStep("2,8")
      .addStep("7-9")
      .addStep("7-11")
      .build(),
  },
  {
    type: "code",
    title: "Branding",
    fileName: "branding.ts",
    steps: CodeStepsBuilder.createSteps()
      .addStep("1")
      .addStep('1-3')
      .addStep('1-5')
      .addStep('7')
      .addStep('7-11')
      .build(),
  },
];

export const chapter5Slides = Chapter.withSlides(getSlides(slidesContent));