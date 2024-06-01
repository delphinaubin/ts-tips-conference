import { Chapter } from "../slide/chapter.slide";
import { getSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";
import { TsFeatureSlide } from "../slide/ts-feature.slide";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "Don't <i>overload</i> me with your problems, mate.",
    subtitle: "Chapter 6.",
  },
  {
    type: "code",
    fileName: "overload-1.ts",
    steps: CodeStepsBuilder.createSteps()
      .addStep("1-4")
      .addStep("8-17")
      .addStep("7-17")
      .addStep("6-17")
      .addStep("6-19")
      .addStep("6-20")
      .addStep("1-4, 6-8")
      .build(),
    transition: "slide-in none-out",
  },
  {
    type: "code",
    fileName: "overload-2.ts",
    steps: CodeStepsBuilder.createSteps()
      .addStep("1-4,8-11")
      .addStep("1-4,6-11")
      .addStep("26")
      .build(),
    transition: "none-in slide-out",
  },
  {
    type: "resume",
    title: "Function Overloading",
    bullets: [`Allow to write <i>type-safe functions</i> with multiple signatures`, ``, ``],
    autoAnimate: true,
  },
  {
    type: "resume",
    title: "Function Overloading",
    bullets: [
      `Allow to write <i>type-safe functions</i> with multiple signatures`,
      `<i>Powerful</i> feature in TypeScript`,
      ``,
    ],
    autoAnimate: true,
  },
  {
    type: "resume",
    title: "Function Overloading",
    bullets: [
      `Allow to write <i>type-safe functions</i> with multiple signatures`,
      `<i style="background-color:transparent; color: inherit">Powerful</i> feature in TypeScript`,
      `<i>BUT</i> Don't use it too much`,
    ],
    autoAnimate: true,
  },
  {
    type: "resume",
    title: "Function Overloading",
    bullets: [
      `Allow to write <i>type-safe functions</i> with multiple signatures`,
      `<i style="background-color:transparent; color: inherit">Powerful</i> feature in TypeScript`,
      `<i>BUT</i> Don't use it too much, it can be <i>HARD</i> to read`,
      ``,
    ],
    autoAnimate: true,
  },
];

export const chapter6Slides = Chapter.withSlides([
  ...getSlides(slidesContent),
  new TsFeatureSlide(),
]).withTransition("slide-in zoom-out");
