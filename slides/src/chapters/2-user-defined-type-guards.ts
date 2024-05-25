import { CodeFromFile } from "../slide-framework/block/code/code-from-file.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { TitleSlide } from "../slide/title.slide";
import { ChapterGroup } from "../slide/chapter-group.slide";

const titleSlide = new TitleSlide(
  "<i>is</i> won't save you when the bullets fly",
  "Chapter 2.",
).withTransition("none-in slide-out");

const codeSampleSlide = new Slide([
  Subtitle.withText("<code>is<code> (User-Defined Type Guards)"), // TODO: Challenge this title with our friend GPT
  Subtitle.withText("<br>"),
  new CodeFromFile("is.ts"),
]);

export const chapter2Slide = ChapterGroup.withSlides([titleSlide, codeSampleSlide]);
