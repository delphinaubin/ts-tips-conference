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
import { Slide } from "./slide-framework/block/slide.block";
import { Image } from "./slide-framework/block/image.block";

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
    speakersSlide,
    new Slide([Image.withSrc("/schema.png")]),
    chapter1Slide,
    computeSummarySlide([chapter1Slide, ...chapterSlides]),
    ...chapterSlides,
    linksSlide,
    thanksSlide,
  ],
  "slide-container",
);

slideDeck.init();
