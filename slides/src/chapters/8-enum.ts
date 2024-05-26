import { Chapter } from "../slide/chapter.slide";
import { getSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";
import { CompiledCodeSlide } from "../slide/compiled-code.slide";
// TODO LE PREMIER QUI A FINI SES SLIDES
const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "Find a title for  <i>enum</i> and union types",
    subtitle: "Chapter 8.",
  },
];

export const chapter8Slides = Chapter.withSlides([
  ...getSlides(slidesContent),
  new CompiledCodeSlide("enum.ts"),
]);
