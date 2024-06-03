import { Resume } from "../slide-framework/block/resume/resume.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Title } from "../slide-framework/block/title/title.block";


export class ResumeSlide extends Slide {
  constructor(
    public readonly title: string, public readonly bullets: string[]
  ) {
    super([Title.withText(title), new Resume(bullets)]);
  }
}
