import { ChapterIndex, Slide } from "../slide-framework/block/slide.block";
import { Title } from "../slide-framework/block/title/title.block";

interface TsFeature {
  tsDocLink: string;
  featureName: string;
  index: number;
}

const featuresByChapters: TsFeature[] = [
  {
    index: 1,
    featureName: "Not the right chapter",
    tsDocLink:
      "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",
  },
  {
    index: 2,
    featureName: "User defined type guards",
    tsDocLink:
      "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",
  },
  {
    index: 3,
    featureName: "Discriminated unions",
    tsDocLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions",
  },
];

function getFeatureByIndex(index: ChapterIndex): TsFeature {
  const foundFeature = featuresByChapters.find((f) => f.index === index);
  if (!foundFeature) {
    throw new Error(`Cannot find feature for chapter index ${index}`);
  }
  return foundFeature;
}

export class TsFeatureSlide extends Slide {
  constructor() {
    super([]);
  }

  async render(): Promise<HTMLElement> {
    const feature = getFeatureByIndex(this.index);
    const slide = new Slide([Title.withText(feature.featureName)]);
    return slide.render();
  }
}
