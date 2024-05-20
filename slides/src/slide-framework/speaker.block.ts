import { Speaker } from "../slide-content/slides";
import { RenderBlock } from "./render-block";


export class SpeakerBlock extends RenderBlock {

  constructor(public speaker: Speaker) {
    super([]);
  }

  override getHtmlElement(): HTMLElement {


    const speakerElement = document.createElement("div");
    speakerElement.classList.add("speaker");
    speakerElement.innerHTML = `
    <div class="speaker">
        <div class="speaker__picture" style="background-image: url('${this.speaker.pictureUrl}')"></div>
        <div class="speaker__info">
          <div class="speaker__info-name">${this.speaker.name}</div>
          <div class="speaker__info-twitter">${this.speaker.twitter}</div>
          <div class="speaker__info-bio">${this.speaker.bio}</div>
        </div>
    </div>
      `;

    return speakerElement;
  }
}
