import "./style.css";
import { SlideDeck } from "./slide-framework/slide-deck";
import { chapter2Slide } from "./chapters/2-user-defined-type-guards";
import {
  firstSlide,
  linksSlide,
  openFeedbackSlide,
  speakersSlide,
  thanksSlide,
} from "./chapters/99-other";
import { chapter1Slide } from "./chapters/1-typescript-strict-plugin";
import { computeSummarySlide } from "./utils/summary";
import { chapter3Slides } from "./chapters/3-discriminated-union-type";
import { chapter4Slides } from "./chapters/4-never";
import { chapter5Slides } from "./chapters/5-flavoring";
import { chapter6Slides } from "./chapters/6-overload";
import { chapter7Slides } from "./chapters/7-template-literal-type";
import { chapter98Slides } from "./chapters/98-infer";
import { Chapter } from "./slide/chapter.slide";
import { Title } from "./slide-framework/block/title/title.block";
import { Slide } from "./slide-framework/block/slide.block";
import { ImageSlide } from "./slide/image.slide";
import { CodeFromText } from "./slide-framework/block/code/code-from-text.block";
import { Image } from "./slide-framework/block/image.block";
import { FirstSlide } from "./slide/first.slide";
import {chapter8Slides} from "./chapters/8-enum";

function toEmojiSlides(emojis: string[]): Slide[] {
  return emojis.map((emoji) =>
    new Slide([Title.withText(`<h1>${emoji}</h1>`)]).withAutoAnimate(true),
  );
}

function toImageSlides(urls: string[]): Slide[] {
  return urls.map((url) => new ImageSlide(url).withTransition("fade"));
}

const chapter0Slide = Chapter.withSlides([
  ...toEmojiSlides([
    "📖", //
    "👯‍♂️", //
    "🎤", //
    "🍹", //
    "📆", // Date
    "🍺", // Pression
    "🍋", // Pressé
    "🎡", // New framework
  ]),
  new Slide([new CodeFromText(`new TitleSlide("I am a title")`)]).withAutoAnimate(true),
  new Slide([new CodeFromText(`new TitleSlide("I am a title")`), new Image("/title-slide.png")])
    .withAutoAnimate(true)
    .withTransition("none-in slide-out"),
  new Slide([
    new CodeFromText(`new ImageSlide("/ts-logo.png")`),
    new Image("/image-slide.png"),
  ]).withTransition("slide-in fade-out"),
  new FirstSlide("", undefined, "/all-slides.png").withTransition("fade-in slide-out"),
  ...toImageSlides([
    "schema-framework/schema-3.jpeg",
    "schema-framework/schema-4.jpeg",
    "schema-framework/schema-5.jpeg",
    "schema-framework/schema-6.jpeg",
  ]),
  ...toEmojiSlides(["🎬"]),
]);

const chapterSlides = [
  chapter2Slide,
  chapter3Slides,
  chapter4Slides,
  chapter5Slides,
  chapter6Slides,
  chapter7Slides,
  chapter98Slides
];

const slideDeck = new SlideDeck(
  [
    firstSlide,
    chapter0Slide,
    speakersSlide,
    chapter1Slide,
    computeSummarySlide([chapter1Slide, ...chapterSlides]),
    ...chapterSlides,
    thanksSlide,
    openFeedbackSlide,
    linksSlide,
    chapter8Slides,
  ],
  "slide-container",
);

slideDeck.init();
