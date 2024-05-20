import { Speaker } from "./slide-content/slides";
import { Slide } from "./slide-framework/slide.block";
import { SpeakerBlock } from "./slide-framework/speaker.block";


export class SpeakersSlide extends Slide {
  constructor(
    public readonly speakers: Speaker[] = []
  ) {
    super(speakers.map((speaker) => new SpeakerBlock(speaker)));
  }
}
