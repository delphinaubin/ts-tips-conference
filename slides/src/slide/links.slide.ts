import { LinkItem } from "../slide-content/models";
import { Links } from "../slide-framework/block/links/links.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Title } from "../slide-framework/block/title/title.block";

export class LinksSlide extends Slide {
  constructor(
    public readonly title: string, links: LinkItem[]
  ) {
    super([Title.withText(title), new Links(links)]);
  }
}
