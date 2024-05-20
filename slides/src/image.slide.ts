import { Slide } from "./slide-framework/slide.block";
import { Title } from "./slide-framework/title.block";
import { Image } from "./slide-framework/image.block";

export class ImageSlide extends Slide {
  constructor(
    public readonly imageSrc: string,
    public readonly title?: string,
  ) {
    super([...(title ? [Title.withText(title)] : []), Image.withSrc(imageSrc)]);
  }
}
