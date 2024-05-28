import { ResumeSlideContent } from "../slide-content/slides";
import { Resume } from "../slide-framework/block/resume/resume.block";
import { Slide } from "../slide-framework/block/slide.block";


export class ResumeSlide extends Slide {
  constructor(
    public readonly resumeSlideContent: Omit<ResumeSlideContent, "type">,
  ) {
    super([new Resume(resumeSlideContent)]);
  }
}
