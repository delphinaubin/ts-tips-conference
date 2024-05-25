// @ts-strict-ignore

import { CodeFromText } from "../slide-framework/block/code/code-from-text.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { ChapterGroup } from "../slide/chapter-group.slide";

function getTitle(): string {
  if (window.innerWidth > 400) {
    return "<code>typescript-strict-plugin</code> FTW!";
  }
}

const pluginSlide = new Slide([
  Subtitle.withText(getTitle()),
  Subtitle.withText("<br>"),
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

export const chapter1Slide = ChapterGroup.withSlides([pluginSlide]);
