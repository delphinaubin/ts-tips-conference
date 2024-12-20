// @ts-strict-ignore
import { CodeFromText } from "../slide-framework/block/code/code-from-text.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { TitleSlide } from "../slide/title.slide";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";
import { Chapter } from "../slide/chapter.slide";
import { ResumeSlide } from "../slide/resume.slide";
import { Title } from "../slide-framework/block/title/title.block";

/**
 * 👇
 */

function getPluginSlide1Title(): string {
  if (window.innerWidth > 400) {
    return "<code>typescript-strict-plugin</code> 🙌";
  } else {
    return "<code>typescript-strict-plugin</code>";
  }
}

/**
 * 👆
 *
 *
 *
 *
 */

const pluginSlide0 = new TitleSlide(
  "<i>Strictness</i> won't save you when the bullets fly",
  "Chapter 1.",
);

const pluginSlide1 = new Slide([
  Subtitle.withText(getPluginSlide1Title()),
  Subtitle.withText("<br>"),
  new CodeFromText(`
/* tsconfig.json */
{
  "compilerOptions": {
    ...
    "strict": false,
    "plugins": [
       {
        "name": "typescript-strict-plugin"
       }
    ]
  }
}`)
    .withLanguage("json")
    .withSteps(
      CodeStepsBuilder.createSteps()
        .addStep("1-3,11-12")
        .addStep("1-3,5,11-12")
        .addStep("1-3,5-12")
        .build(),
    ),
]);

const pluginSlide2 = new Slide([
  Subtitle.withText("Just a script away!"),
  new CodeFromText(
    `{
  "scripts": {
    ...,
    "typecheck": "tsc && tsc-strict", // Can be added to CI
  },
}`,
  ),
]);

const resumeSlide = new ResumeSlide("TypeScript Strict Plugin", [
  "🚀 Progressive strictness",
  "👮‍♂️ No more excuses not to be strict",
  "🕵️‍♂️ Easy detection of files with strict error",
]);

const cleanSlide = new Slide([Title.withText("🧹")]);

export const chapter1Slide = Chapter.withSlides([
  pluginSlide0,
  pluginSlide1,
  pluginSlide2,
  resumeSlide,
  cleanSlide,
]);
