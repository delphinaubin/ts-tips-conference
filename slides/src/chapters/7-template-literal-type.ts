import { Chapter } from "../slide/chapter.slide";
import { renderSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "A quick zoom on <i>template literal</i> type",
    subtitle: "Chapter 7.",
  },
  {
    type: "code",
    title: "Let's validate emails",
    fileName: "template-literal-email.ts",
    steps: CodeStepsBuilder.createSteps()
      .addStep("1-2")
      .addStep("1-2,5")
      .addStep("1-2,6")
      .addStep("1-2,7")
      .build(),
  },
];

/**
 *
 *
 *
 *
 *
 *
 *
 *
 * 👇
 */

export const chapter7Slides = Chapter.withSlides(renderSlides(slidesContent)).withTransition(
  "zoum-in slide-out",
);

/**
 * 👆
 *
 *
 *
 *
 *
 *
 *
 *
 */
