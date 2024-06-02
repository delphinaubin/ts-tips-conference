import { ChapterIndex, Slide } from "../slide-framework/block/slide.block";
import { Title } from "../slide-framework/block/title/title.block";
import { Link } from "../slide-framework/block/link/link.block";

interface TsFeature {
  tsDocLink: string;
  featureName: string;
  index: number;
}

const featuresByChapters: TsFeature[] = [
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
  {
    index: 4,
    featureName: "Never",
    tsDocLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type",
  },
  {
    index: 5,
    featureName: "Flavoring",
    tsDocLink: "https://brightinventions.pl/blog/branding-flavoring/",
  },
  {
    index: 6,
    featureName: "Overload",
    tsDocLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads",
  },
  {
    index: 7,
    featureName: "Template literal types",
    tsDocLink: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",
  },
  {
    index: 8,
    featureName: "Enums",
    tsDocLink: "https://www.typescriptlang.org/docs/handbook/enums.html",
  },
  {
    index: 9,
    featureName: "Infer",
    tsDocLink:
      "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types",
  },
];

function getFeatureByIndex(index: ChapterIndex): TsFeature | null {
  const foundFeature = featuresByChapters.find((f) => f.index === index);
  return foundFeature || null;
}

export class TsFeatureSlide extends Slide {
  constructor() {
    super([]);
  }

  async render(): Promise<HTMLElement> {
    const feature = this.chapterIndex && getFeatureByIndex(this.index);
    if (!feature) {
      const notFoundSlide = new Slide([Title.withText("<i>404</i> Documentation not found")]);
      return notFoundSlide.render();
    }
    const slide = new Slide([
      Title.withText(feature.featureName),
      Link.withText("Go to documentation").withHref(feature.tsDocLink).withTargetBlank(),
    ]);
    return slide.render();
  }
}
