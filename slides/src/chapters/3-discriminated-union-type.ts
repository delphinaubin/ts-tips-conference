import { Chapter } from "../slide/chapter.slide";
import { renderSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "With <i>union</i> we stand",
    subtitle: "Chapter 3.",
  },
  {
    type: "resume",
    title: "Discriminated Union Type",
    bullets: [`👮‍♂️ Improved Type Safety`, `🤖 Enhanced Autocompletion`],
  },
  // TODO: Aurel - Le slide qui ne marche pas 👇
  // {
  //   type: "image",
  //   imageSrc: "/tada.gif",
  // },
  {
    type: "first",
    title: `<h3><i>// TODO:</i> Aurel, vu que tu ne lis pas tes mails, je te mets un rappel ici: <br> <br> Slide GIF à fixer 🙏🏼</h3>`,
    imageUrl: "",
  },
];

export const chapter3Slides = Chapter.withSlides([...renderSlides(slidesContent)]);
