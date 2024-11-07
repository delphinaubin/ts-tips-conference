import { Chapter } from "../slide/chapter.slide";
import { renderSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";
import { Title } from "../slide-framework/block/title/title.block";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";

const slidesContent: SlideContent[] = [
  {
    type: "title",
    title: "A dash of <i>flavoring</i>",
    subtitle: "Chapter 5.",
  },
  {
    type: "first",
    title: "<i>Duck typing</i>",
    backgroundImage: "/duck-typing.avif",
    overlay: {
      color: "orange",
      opacity: 0.8,
    },
  },
  {
    type: "code",
    title: "Flavoring",
    fileName: "flavoring-vs-branding.ts",
    steps: CodeStepsBuilder.createSteps().addStep("1-5").addStep("1-12").addStep("13-13").build(),
  },
  {
    type: "tsFeature",
  },
  {
    type: "custom",
    blocks: [Title.withText("🧹")],
  },
];

export const chapter5Slides = Chapter.withSlides(renderSlides(slidesContent));
