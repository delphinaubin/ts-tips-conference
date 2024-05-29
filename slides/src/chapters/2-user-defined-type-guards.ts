import { CodeFromFile } from "../slide-framework/block/code/code-from-file.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { TitleSlide } from "../slide/title.slide";
import { Chapter } from "../slide/chapter.slide";
import { TsFeatureSlide } from "../slide/ts-feature.slide";
import { ResumeSlide } from "../slide/resume.slide";
import { Image } from "../slide-framework/block/image.block";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";

const titleSlide = new TitleSlide(
  "Get your <i>Type Guards</i> in place, or you will play with fire.",
  "Chapter 2.",
).withTransition("none-in slide-out");

const isSampleSlide = new Slide([
  Subtitle.withText("<i>is</i> User-Defined Type Guards"),
  new CodeFromFile("is.ts"),
]);

const assertsSampleSlide = new Slide([
  Subtitle.withText("<i>asserts</i> Signatures"),
  new CodeFromFile("asserts.ts"), // With TS 3.7
]);

const trustMeSlide1 = new Slide([
  Subtitle.withText("But to use carefully..."),
  new CodeFromFile("is-asserts-carefully-1.ts")
    .withLanguage("typescript")
    .withSteps(
      CodeStepsBuilder.createSteps()
        .addStep("1-5")
        .build(),
    ),
]).withTransition('slide-in none-out');

const trustMeSlide2 = new Slide([
  Subtitle.withText("But to use carefully..."),
  new CodeFromFile("is-asserts-carefully-2.ts")
    .withLanguage("typescript")
    .withSteps(
      CodeStepsBuilder.createSteps()
        .addStep("2-4")
        .addStep("1-5")
        .build(),
    ),
]).withTransition('none-in slide-out');

const trustMeSlide3 = new Slide([
  Subtitle.withText("But to use carefully..."),
  new CodeFromFile("is-asserts-carefully-2.ts")
    .withLanguage("typescript"),
  Image.withSrc("/public/trust-me.webp"),
]).withTransition('auto-animate');

// TODO: check if we keep this slide
const trustMeSlide4 = new Slide([
  Subtitle.withText("But to use carefully..."),
  new CodeFromFile("is-asserts-carefully-3.ts")
    .withLanguage("typescript"),
]).withTransition('auto-animate');

const resumeSlide = new ResumeSlide({
  title: "Type Guards",
  bullets: [
    `Ensure type safety in your code`,
    `Enhance autocompletion`,
    `Prevent runtime errors`,
    `To use with care`,
  ],
});

const featureSlide = new TsFeatureSlide();

export const chapter2Slide = Chapter.withSlides([titleSlide, isSampleSlide, assertsSampleSlide, trustMeSlide1, trustMeSlide2, trustMeSlide3, trustMeSlide4, resumeSlide, featureSlide]);
