// @ts-strict-ignore

import { CodeFromText } from "../slide-framework/block/code/code-from-text.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";

function getTitle(): string {
  if (window.innerWidth > 400) {
    return "<code>typescript-strict-plugin</code> FTW!";
  }
}

export const pluginSlide = new Slide([
  Subtitle.withText(getTitle()),
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
  }`
  ),
]);