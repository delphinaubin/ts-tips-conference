import "./monokai.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/blood.css";

import { Slide } from "./block/slide.block";
import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import { ChapterComputationContext } from "./chapter-computation-context.type";

export class SlideDeck {
  constructor(
    private readonly slides: Slide[],
    private readonly htmlElementId: string,
  ) {}

  async init(): Promise<void> {
    const rootElement = document.getElementById(this.htmlElementId);
    if (!rootElement) {
      throw new Error(
        `Cannot initialize slideDeck on an unknown dom element ID (${this.htmlElementId})`,
      );
    }

    rootElement.innerHTML = "";

    const context: ChapterComputationContext = {
      currentChapter: null,
      currentSlide: 0,
      lastChapterIndex: 0,
    };
    this.slides.forEach((slide) => {
      slide.computeChapterAndSlideIndexes(context);
    });
    console.dir(this.slides, { depth: 1000 });

    const htmlElements = await Promise.all(
      this.slides.map((slide) => {
        return slide.render();
      }),
    );

    rootElement.append(...htmlElements);

    await Reveal.initialize({
      hash: true,
      plugins: [RevealHighlight],
    });
  }
}
