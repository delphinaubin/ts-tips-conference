import { CodeFromFile } from "../slide-framework/block/code/code-from-file.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { TitleSlide } from "../slide/title.slide";
import { Chapter } from "../slide/chapter.slide";
import { ResumeSlide } from "../slide/resume.slide";
import { Image } from "../slide-framework/block/image.block";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";

const titleSlide = new TitleSlide(
  "Get your <i>Type Guards</i> in place",
  "Chapter 2.",
).withTransition("none-in slide-out");

const isSampleSlide = new Slide([
  Subtitle.withText("<i>is</i> User-Defined Type Guards"),
  new CodeFromFile("is.ts").withSteps(
    CodeStepsBuilder.createSteps().addStep("1-3").addStep("1-8").addStep("1-3,9-13").build(),
  ),
]);

const assertsSampleSlide = new Slide([
  Subtitle.withText("<i>asserts</i> Signatures"), // With TS 3.7
  new CodeFromFile("asserts.ts").withSteps(
    CodeStepsBuilder.createSteps().addStep("1-5").addStep("1-12").build(),
  ),
]);

const trustMeSlide1 = new Slide([
  Subtitle.withText("But to use carefully..."),
  new CodeFromFile("is-asserts-carefully-1.ts")
    .withLanguage("typescript")
    .withSteps(CodeStepsBuilder.createSteps().addStep("1-5").build()),
]).withTransition("slide-in none-out");

const trustMeSlide2 = new Slide([
  Subtitle.withText("But to use carefully..."),
  new CodeFromFile("is-asserts-carefully-2.ts")
    .withLanguage("typescript")
    .withSteps(CodeStepsBuilder.createSteps().addStep("2-4").addStep("1-5").build()),
]).withTransition("none-in slide-out");

const trustMeSlide3 = new Slide([
  Subtitle.withText("But to use carefully..."),
  new CodeFromFile("is-asserts-carefully-2.ts").withLanguage("typescript"),
  Image.withSrc("/trust-me.webp"),
]).withTransition("auto-animate");

const trustMeSlide4 = new Slide([
  Subtitle.withText("But to use carefully..."),
  new CodeFromFile("is-asserts-carefully-3.ts").withLanguage("typescript"),
]).withTransition("auto-animate");

const resumeSlide = new ResumeSlide({
  title: "Type Guards",
  bullets: [
    `Ensure type safety in your code`,
    `Enhance autocompletion`,
    `Prevent runtime errors`,
    `To use with care`,
  ],
});

export const chapter2Slide = Chapter.withSlides([
  titleSlide,
  isSampleSlide,
  assertsSampleSlide,
  trustMeSlide1,
  trustMeSlide2,
  trustMeSlide3,
  trustMeSlide4,
  resumeSlide,
]);
