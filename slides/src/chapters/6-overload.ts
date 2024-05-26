import { Chapter } from "../slide/chapter.slide";
import { getSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";

// TODO ALO: Gérer le truc

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "Don't <i>overload</i> me with your problems, mate.",
    subtitle: "Chapter 6.",
  },
];

export const chapter6Slides = Chapter.withSlides(getSlides(slidesContent));
