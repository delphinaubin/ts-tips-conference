import { LinksSlideContent } from "../slide-content/slides";
import { Links } from "../slide-framework/block/links/links.block";
import { Slide } from "../slide-framework/block/slide.block";


export class LinksSlide extends Slide {
  constructor(
    public readonly linksSlideContent: Omit<LinksSlideContent, "type">,
  ) {
    super([new Links(linksSlideContent)]);
  }
}
