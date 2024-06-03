import { List } from "../slide-framework/block/list/list.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Title } from "../slide-framework/block/title/title.block";


export class ListSlide extends Slide {
  constructor(
    public readonly title: string, public readonly items: string[]
  ) {
    super([Title.withText(title), new List(items)]);
  }
}
