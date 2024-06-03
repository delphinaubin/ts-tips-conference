import { Chapter } from "../slide/chapter.slide";
import { renderSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";
import { CodeStepsBuilder } from "../slide-framework/block/code/code.block";
import { Title } from "../slide-framework/block/title/title.block";

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
    fileName: "duck-typing.ts",
    steps: CodeStepsBuilder.createSteps()
      .addStep("1-3")
      .addStep("1-7")
      .addStep("1-9")
      .addStep("1-13")
      .addStep("1-15")
      .build(),
  },
  {
    type: "code",
    title: "Avoid confusion",
    fileName: "flavoring.ts",
    steps: CodeStepsBuilder.createSteps().addStep("1-3").addStep("1-6").addStep("1-9").build(),
  },
  {
    type: "code",
    title: "Flavoring vs Branding",
    fileName: "flavoring-vs-branding.ts",
    steps: CodeStepsBuilder.createSteps()
      .addStep("1-3")
      .addStep("1-5")
      .addStep("7-9")
      .addStep("2,8")
      .addStep("7-9")
      .addStep("7-11")
      .build(),
  },
  {
    type: "code",
    title: "Branding",
    fileName: "branding.ts",
    steps: CodeStepsBuilder.createSteps()
      .addStep("1")
      .addStep("1-3")
      .addStep("1-5")
      .addStep("7")
      .addStep("7-11")
      .build(),
  },
  {
    type: "tsFeature",
  },
  {
    type: "resume",
    bullets: [
      "🦆Use <i>flavoring</i> to avoid Duck typing confusion",
      "🛡️Use <i>branding</i> to enforce safety",
    ],
  },
  {
    type: "custom",
    blocks: [Title.withText("🧹")],
  },
];

export const chapter5Slides = Chapter.withSlides(renderSlides(slidesContent));
