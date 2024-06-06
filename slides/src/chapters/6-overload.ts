import { Chapter } from "../slide/chapter.slide";
import { renderSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "Don't <i>overload</i> me with your problems, mate.",
    subtitle: "Chapter 6.",
  },
  {
    type: "resume",
    title: "Function Overloading",
    bullets: [`✍️ Allow to write <i>type-safe functions</i> with multiple signatures`, ``, ``],
    autoAnimate: true,
  },
  {
    type: "resume",
    title: "Function Overloading",
    bullets: [
      `✍️ Allow to write <i>type-safe functions</i> with multiple signatures`,
      `🚀 <i>Powerful</i> feature in TypeScript`,
      ``,
    ],
    autoAnimate: true,
  },
  {
    type: "resume",
    title: "Function Overloading",
    bullets: [
      `✍️ Allow to write <i>type-safe functions</i> with multiple signatures`,
      `🚀 <i style="background-color:transparent; color: inherit">Powerful</i> feature in TypeScript`,
      `⚠️ <i>BUT</i> Don't use it too much`,
    ],
    autoAnimate: true,
  },
  {
    type: "resume",
    title: "Function Overloading",
    bullets: [
      `✍️ Allow to write <i>type-safe functions</i> with multiple signatures`,
      `🚀 <i style="background-color:transparent; color: inherit">Powerful</i> feature in TypeScript`,
      `⚠️ <i>BUT</i> Don't use it too much, it can be <i>HARD</i> to read`,
      ``,
    ],
    autoAnimate: true,
  },
  {
    type: "tsFeature",
  },
];

/**
 *
 *
 *
 *
 *
 *
 * 👇
 *
 */

export const chapter6Slides = Chapter.withSlides([...renderSlides(slidesContent)]).withTransition(
  "slide-in zoom-out",
);

/**
 *
 * 👆
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
