import { Chapter } from "../slide/chapter.slide";
import { getSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";

// TODO DAU gérer le truc

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "A quick zoom on <i>template literal</i> type",
    subtitle: "Chapter 7.",
  },
];

export const chapter7Slides = Chapter.withSlides(getSlides(slidesContent)).withTransition(
  "zoom-in slide-out",
);
