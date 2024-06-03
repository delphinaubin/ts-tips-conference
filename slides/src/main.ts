import "./style.css";
import { SlideDeck } from "./slide-framework/slide-deck";
import { chapter2Slide } from "./chapters/2-user-defined-type-guards";
import { firstSlide, linksSlide, speakersSlide, thanksSlide } from "./chapters/99-other";
import { chapter1Slide } from "./chapters/1-typescript-strict-plugin";
import { computeSummarySlide } from "./utils/summary";
import { chapter3Slides } from "./chapters/3-discriminated-union-type";
import { chapter4Slides } from "./chapters/4-never";
import { chapter5Slides } from "./chapters/5-flavoring";
import { chapter6Slides } from "./chapters/6-overload";
import { chapter7Slides } from "./chapters/7-template-literal-type";
import { chapter8Slides } from "./chapters/8-enum";
import { chapter98Slides } from "./chapters/98-infer";
import { Chapter } from "./slide/chapter.slide";
import { Title } from "./slide-framework/block/title/title.block";
import { Slide } from "./slide-framework/block/slide.block";
import { ImageSlide } from "./slide/image.slide";

const chapter0Slide = Chapter.withSlides([
  ...[ 
    "📖", // 
    "👯‍♂️", // 
    "🎤", // 
    "🧉", // 
    "📆", // Date 
    "🍺", // Pression
    "🍋", // Pressé
    "🛞", // Pourquoi pas reinvente la ... 
    "🎡", // New framework 
  ]
    .map((emoji) => new Slide([Title.withText(`<h1>${emoji}</h1>`)]).withAutoAnimate(true)),
  new ImageSlide("/schema.png"),
  new Slide([Title.withText(`<h1>🎬</h1>`)])
]);

const chapterSlides = [
  chapter2Slide,
  chapter3Slides,
  chapter4Slides,
  chapter5Slides,
  chapter6Slides,
  chapter7Slides,
  chapter8Slides,
  chapter98Slides,
];

const slideDeck = new SlideDeck(
  [
    firstSlide,
    chapter0Slide,
    speakersSlide,
    chapter1Slide,
    computeSummarySlide([chapter1Slide, ...chapterSlides]),
    ...chapterSlides,
    linksSlide,
    thanksSlide,
  ],
  "slide-container",
);

slideDeck.init();
