import { Speaker } from "../slide-content/models";
import { Slide } from "../slide-framework/block/slide.block";
import { SpeakerBlock } from "../slide-framework/block/speaker/speaker.block";


export class SpeakersSlide extends Slide {
  constructor(
    public readonly speakers: Speaker[] = []
  ) {
    super(speakers.map((speaker) => new SpeakerBlock(speaker)));
  }
}
