import { CodeFromFile } from "../slide-framework/block/code/code-from-file.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { Chapter } from "../slide/chapter.slide";
import { Image } from "../slide-framework/block/image.block";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";
import { SlideContent } from "../slide-content/slides";
import { renderSlides } from "../slide-content/render-slides";

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "Get your <i>Type Guards</i> in place",
    subtitle: "Chapter 2.",
    transition: "none-in slide-out",
  },
  {
    type: "code",
    title: "<i>is</i> User-Defined Type Guards",
    fileName: "is.ts",
    steps: CodeStepsBuilder.createSteps().addStep("1-3").addStep("1-8").addStep("1-3,9-13").build(),
  },
  {
    type: "code",
    title: "<i>asserts</i> Signatures", // With TS 3.7
    fileName: "asserts.ts",
    steps: CodeStepsBuilder.createSteps().addStep("1-5").addStep("1-12").build(),
  },
  {
    type: "code",
    title: "But to use carefully...",
    fileName: "is-asserts-carefully-1.ts",
    steps: CodeStepsBuilder.createSteps().addStep("1-5").build(),
    transition: "slide-in none-out",
  },
  {
    type: "code",
    title: "But to use carefully...",
    fileName: "is-asserts-carefully-2.ts",
    steps: CodeStepsBuilder.createSteps().addStep("2-4").addStep("1-5").build(),
    transition: "none-in slide-out",
  },
];

const trustMeSlide3 = new Slide([
  Subtitle.withText("But to use carefully..."),
  new CodeFromFile("is-asserts-carefully-2.ts").withLanguage("typescript"),
  Image.withSrc("/trust-me.webp"),
]).withAutoAnimate(true);

const slidesContent2: SlideContent[] = [
  {
    type: "code",
    title: "But to use carefully...",
    fileName: "is-asserts-carefully-3.ts",
    autoAnimate: true,
  },
  {
    type: "list",
    title: "Type Guards",
    items: [
      `👮‍️ Ensure type safety in your code`,
      `🤖 Enhance autocompletion`,
      `🙅‍ Prevent runtime errors`,
      `🔥 To use with care`,
    ],
  },
];

export const chapter2Slide = Chapter.withSlides([...renderSlides(slidesContent), trustMeSlide3, ...renderSlides(slidesContent2)]);