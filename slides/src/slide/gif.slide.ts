import { Slide } from "../slide-framework/block/slide.block";
import { Title } from "../slide-framework/block/title/title.block";
import { Image } from "../slide-framework/block/image.block";

export class GifSlide extends Slide {
  constructor(
    public readonly gifSrc: string,
    public readonly title?: string,
  ) {
    super([...(title ? [Title.withText(title)] : []), Image.withSrc(gifSrc)]);
  }
}
