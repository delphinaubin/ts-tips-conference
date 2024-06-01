import { Chapter } from "../slide/chapter.slide";
import { getSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "With <i>union</i> we stand",
    subtitle: "Chapter 3.",
  },
  {
    type: "code",
    // title: "Discriminated Union Type",
    fileName: "union-1.ts"
  },
  {
    type: "code",
    // title: "Discriminated Union Type",
    fileName: "union-2.ts"
  },
  {
    type: "code",
    title: "Discriminated Union Type",
    fileName: "union-3.ts",
    steps: CodeStepsBuilder.createSteps()
      .addStep("1,12")
      .addStep("1-2,6,12")
      .addStep("1-3,6,12")
      .addStep("1-4,6,12")
      .addStep("1-5,6,12")
      .addStep("1-12")
      .build(),
  },
  {
    type: "resume",
    title: "Discriminated Union Type",
    bullets: [
      `Improved Type Safety`,
      `Enhanced Autocompletion`,
    ],
  },
  {
    type: "first",
    title: `<h3><i>// TODO:</i> Aurel, vu que tu ne lis pas tes mails, je te mets un rappel ici: <br> <br> Slide GIF à fixer 🙏🏼</h3>`,
    imageUrl: "",
  },
  // // TODO: Aurel - Le slide qui ne marche pas 👇
  {
    type: "image",
    imageSrc: "/tada.gif"
  }
];

export const chapter3Slides = Chapter.withSlides([...getSlides(slidesContent)]);
