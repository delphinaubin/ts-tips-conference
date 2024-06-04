import { Chapter } from "../slide/chapter.slide";
import { renderSlides } from "../slide-content/render-slides";
import { SlideContent } from "../slide-content/slides";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { Title } from "../slide-framework/block/title/title.block";

const slidesContent: SlideContent[] = [
  {
    type: "custom",
    blocks: [
      Subtitle.withText("Chapter 81."),
      Title.withText("Don't use <i>enums</i>"),
      Subtitle.withText(`<br/>...<br/><br/>`),
      Subtitle.withText("Chapter 98."),
      Title.withText("<i>Infer</i> this mate!"),
    ],
  },
];

export const chapter98Slides = Chapter.withSlides(renderSlides(slidesContent));
