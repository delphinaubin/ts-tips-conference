import { Chapter } from "../slide/chapter.slide";
import { getSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";
import { TsFeatureSlide } from "../slide/ts-feature.slide";

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "Don't <i>overload</i> me with your problems, mate.",
    subtitle: "Chapter 6.",
  },
  {
    type: "code",
    fileName: "overload-1.ts"
  },
  {
    type: "resume",
    title: "Function Overloading",
    bullets: [
      `Allow to write <i>type-safe functions</i> with multiple signatures`,
      ``,
      ``,
    ],
    transition: "auto-animate"
  },
  {
    type: "resume",
    title: "Function Overloading",
    bullets: [
      `Allow to write <i>type-safe functions</i> with multiple signatures`,
      `<i>Powerful</i> feature in TypeScript`,
      ``,
    ],
    transition: "auto-animate"
  },
  {
    type: "resume",
    title: "Function Overloading",
    bullets: [
      `Allow to write <i>type-safe functions</i> with multiple signatures`,
      `<i style="background-color:transparent; color: inherit">Powerful</i> feature in TypeScript`,
      `<i>BUT</i> Don't use it too much`,
    ],
    transition: "auto-animate"
  },
  {
    type: "resume",
    title: "Function Overloading",
    bullets: [
      `Allow to write <i>type-safe functions</i> with multiple signatures`,
      `<i style="background-color:transparent; color: inherit">Powerful</i> feature in TypeScript`,
      `<i>BUT</i> Don't use it too much, it can be <i>HARD</i> to read`,
      ``
    ],
    transition: "auto-animate"
  },
];

export const chapter6Slides = Chapter.withSlides([...getSlides(slidesContent), new TsFeatureSlide()]).withTransition("slide-in zoom-out");
