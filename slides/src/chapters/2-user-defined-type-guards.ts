import { CodeFromFile } from "../slide-framework/block/code/code-from-file.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { TitleSlide } from "../slide/title.slide";
import { Chapter } from "../slide/chapter.slide";
import { TsFeatureSlide } from "../slide/ts-feature.slide";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";

const titleSlide = new TitleSlide(
  "<i>Type Guards</i> won't save you when the bullets fly", // TODO: ALO ?? DAU Challenge this title with our friend GPT
  "Chapter 2.",
).withTransition("none-in slide-out");

const isSampleSlide = new Slide([
  Subtitle.withText("<code>is<code> - User-Defined Type Guards"),
  Subtitle.withText("<br>"),
  new CodeFromFile("is.ts"),
]);

/**
 * @see chapter.slide.ts
 * With TS 3.7
 */
const assertsSampleSlide = new Slide([
  Subtitle.withText("<code>Assertion<code> signatures"),
  Subtitle.withText("<br>"),
  new CodeFromFile("asserts.ts")
    .withLanguage("typescript")
    .withSteps(
      CodeStepsBuilder.createSteps()
        .addStep("1-3")
        .addStep("5,9")
        .addStep("5-9")
        .addStep("5-9,11,16")
        .addStep("5-9,11,12,16")
        .addStep("5-9,11-16")
        .build(),
    ),
]);

// TODO ALO: Fix summary à cause des chapters

const featureSlide = new TsFeatureSlide();

export const chapter2Slide = Chapter.withSlides([titleSlide, isSampleSlide, assertsSampleSlide, featureSlide]);
