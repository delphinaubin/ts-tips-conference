import { FirstBlock } from "../slide-framework/block/first/first.block";
import { Slide } from "../slide-framework/block/slide.block";

export class FirstSlide extends Slide {
  constructor(
    imageUrl: string, title: string, backgroundImage?: string
  ) {
    super([new FirstBlock(imageUrl, title, backgroundImage)]);
  }
}
