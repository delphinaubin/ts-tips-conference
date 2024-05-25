import { CodeFromText } from "../slide-framework/block/code/code-from-text.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { Chapter } from "../slide/chapter.slide";
import { TitleSlide } from "../slide/title.slide";

const pluginSlide0 = new TitleSlide(
  "<i>Strictness</i> won't save you when the bullets fly",
  "Chapter 1."
);

function getPluginSlide1Title(): string {
  if (window.innerWidth > 400) {
    return "<code>typescript-strict-plugin</code> FTW!";
  }
}

const pluginSlide1 = new Slide([
  Subtitle.withText(getPluginSlide1Title()),
  Subtitle.withText('<br>'),
  new CodeFromText(`{
    "compilerOptions": {
      ...
      "strict": false,
      "plugins": [
         {
          "name": "typescript-strict-plugin"
         }
      ]
    }
  }`),
]);

export const chapter1Slide = Chapter.withSlides([pluginSlide0, pluginSlide1]);
