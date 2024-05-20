import { Slide } from "../slide-framework/block/slide.block";
import { Title } from "../slide-framework/block/title/title.block";
import { Image } from "../slide-framework/block/image.block";

export class ImageSlide extends Slide {
  constructor(
    public readonly imageSrc: string,
    public readonly title?: string,
  ) {
    super([...(title ? [Title.withText(title)] : []), Image.withSrc(imageSrc)]);
  }
}
