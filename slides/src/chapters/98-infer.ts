import { Chapter } from "../slide/chapter.slide";
import { renderSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";

// TODO DAU gérer le truc

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "<i>Infer</i> this mate!",
    subtitle: "Chapter 98.",
  },
];

export const chapter98Slides = Chapter.withSlides(renderSlides(slidesContent));
