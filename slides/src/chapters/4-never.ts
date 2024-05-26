import { Chapter } from "../slide/chapter.slide";
import { getSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";

// TODO ALO gérer le truc

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "Never say <i>never</i>",
    subtitle: "Chapter 4.",
  }
];

export const chapter4Slides = Chapter.withSlides(getSlides(slidesContent));
