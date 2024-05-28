// @ts-strict-ignore
import { CodeFromText } from "../slide-framework/block/code/code-from-text.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { TitleSlide } from "../slide/title.slide";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";
import { Chapter } from "../slide/chapter.slide";
import { ResumeSlide } from "../slide/resume.slide";

const pluginSlide0 = new TitleSlide(
  "<i>Strictness</i> won't save you when the bullets fly",
  "Chapter 1.",
);

function getPluginSlide1Title(): string {
  if (window.innerWidth > 400) {
    return "<code>typescript-strict-plugin</code> FTW!";
  } else if (window.innerWidth < 400) {
    return "<code>typescript-strict-plugin</code>";
  }
}

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
    "typecheck": "tsc && tsc-strict",
  },
}`
  ),
]);

const resumeSlide = new ResumeSlide({
  title: "TypeScript Strict Plugin",
  bullets: [
    "🚀 Progressive strictness",
    "👨‍🚀 No more excuses to be strict",
    "🔥 Easy detection of files with strict error",
  ],
});

export const chapter1Slide = Chapter.withSlides([pluginSlide0, pluginSlide1, pluginSlide2, resumeSlide]);
