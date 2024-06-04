import { Chapter } from "../slide/chapter.slide";
import { renderSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "Never say <i>never</i>",
    subtitle: "Chapter 4.",
  },
  {
    type: "tsFeature",
  },
];

export const chapter4Slides = Chapter.withSlides([...renderSlides(slidesContent)]);
