import { CodeFromFile } from "../slide-framework/block/code/code-from-file.block";
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
  },
  {
    type: "custom",
    blocks: [
      Subtitle.withText("<i>Deprecated</i> tips since <code style='color: deeppink'>typescript@5.5</code>")
    ]
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
    steps: CodeStepsBuilder.createSteps().addStep("1-5").build(),
    transition: "none",
    autoAnimate: true,
  },
  {
    type: "custom",
    blocks: [
      Subtitle.withText("But to use carefully..."),
      new CodeFromFile("is-asserts-carefully-2.ts").withLanguage("typescript"),
      Image.withSrc("/trust-me.webp"),
    ],
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

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

export const chapter2Slide = Chapter.withSlides(renderSlides(slidesContent));