
import "./style.css";
import { SlideDeck } from "./slide-framework/slide-deck";
import { getSlides } from "./slide-content/render-slides";
import { CompiledCodeSlide } from "./slide/compiled-code.slide";
import { computeSummarySlide, isSlides } from "./chapters/2-is-summary";
import { pluginSlide } from "./chapters/1-typescript-strict-plugin";
import { linksSlide, thanksSlide } from "./chapters/99-other";

const otherSlides = getSlides();

const enumSlide = new CompiledCodeSlide("enum.ts");

const slides = [
  pluginSlide,
  ...isSlides,
  ...otherSlides,
  enumSlide
];
    
const slideDeck = new SlideDeck([...slides, computeSummarySlide(slides), linksSlide, thanksSlide], "slide-container");

slideDeck.init();
  
  // const slide1 = new TitleSlide(getTitle(), "And more...");
  
  // const slide2 = new Slide([Subtitle.withText("This is the second slide...")]);
  
  // const slide3 = new CodeSlide("test.code.ts", "Some code");
  
  // const slide5 = new TitleSlide("Title 2", "And more...");
  
  // const slide6 = new Slide([Subtitle.withText("This is the second slide...")]).withTransition(
  //   "none-in slide-out",
  // );
