import { Chapter } from "../slide/chapter.slide";
import { renderSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";
import { CodeFromFile } from "../slide-framework/block/code/code-from-file.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";

// TODO LE PREMIER QUI A FINI SES SLIDES

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "The <i>enum</i> conundrum",
    subtitle: "Chapter 8.",
  },
  {
    type: "code",
    fileName: "enum-danger.ts",
    steps: CodeStepsBuilder.createSteps()
      .addStep("1-4")
      .addStep("1-7, 10")
      .addStep("1-8, 10")
      .addStep("1-10")
      .addStep("1-12")
      .addStep("1-14")
      .build(),
    transition: "slide-in none-out",
  },
  {
    type: "code",
    fileName: "enum-danger-with-number.ts",
    steps: CodeStepsBuilder.createSteps().addStep("1-14").build(),
    transition: "none-in slide-out",
  },
  {
    type: "code",
    title: "<i>enum</i>",
    fileName: "enum.ts",
    autoAnimate: true,
  },
  {
    type: "compiledCode",
    title: "<i>enum</i>",
    fileName: "enum.ts",
    autoAnimate: true,
    transition: "none-in slide-out",
  },
  {
    type: "code",
    title: "<i>const enum</i>",
    fileName: "const-enum.ts",
    autoAnimate: true,
  },
  {
    type: "custom",
    blocks: [
      Subtitle.withText("<i>const enum</i>"),
      CodeFromFile.fromFile("const-enum.ts"),
      CodeFromFile.fromFile("compiled-code-enum.js"),
    ],
    autoAnimate: true,
    transition: "none-in slide-out",
  },
  {
    type: "compiledCode",
    title: "Or just an <i>union type</i>",
    fileName: "simple-union-type.ts",
  },
  {
    type: "code",
    title: "Or an <i>Object</i>",
    fileName: "simple-record.ts",
    autoAnimate: true,
  },
  {
    type: "compiledCode",
    title: "Or an <i>Object</i>",
    fileName: "simple-record.ts",
    autoAnimate: true,
    transition: "none-in slide-out",
  },
  {
    title: "Work with <i>Objects</i>",
    type: "code",
    fileName: "enum-as-object.ts",
  },
  {
    type: "tsFeature",
  },
];

export const chapter8Slides = Chapter.withSlides([...renderSlides(slidesContent)]);
