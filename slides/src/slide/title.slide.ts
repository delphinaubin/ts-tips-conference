import { Slide } from "../slide-framework/block/slide.block";
import { Title } from "../slide-framework/block/title/title.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";

export class TitleSlide extends Slide {
  constructor(
    public readonly title: string,
    public readonly subTitle?: string,
  ) {
    super([
      ...(subTitle ? [Subtitle.withText(subTitle)] : []),
      Title.withText(title),
    ]);
  }
}
