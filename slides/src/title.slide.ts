import { Slide } from "./slide-framework/slide.block";
import { Title } from "./slide-framework/title.block";
import { Subtitle } from "./slide-framework/subtitle.block";

export class TitleSlide extends Slide {
  constructor(
    public readonly title: string,
    public readonly subTitle?: string,
  ) {
    super([
      Title.withText(title),
      ...(subTitle ? [Subtitle.withText(subTitle)] : []),
    ]);
  }
}
