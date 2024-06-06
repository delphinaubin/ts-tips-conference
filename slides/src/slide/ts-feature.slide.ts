import { ChapterIndex, Slide } from "../slide-framework/block/slide.block";
import { Title } from "../slide-framework/block/title/title.block";
import { Link } from "../slide-framework/block/link/link.block";
import { TsFeature } from "../slide-content/models";

const NOT_FOUND_SLIDE = new Slide([Title.withText("<i>404</i> Documentation not found")]);
/**
 *
 *
 *
 *
 *
 *
 * 👇
 */

const featuresByChapters: TsFeature[] = [
  {
    index: 3,
    featureName: "User defined type guards",
    tsDocLink:
      "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates",
  },
  {
    index: 4,
    featureName: "Discriminated unions",
    tsDocLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions",
  },
  {
    index: 5,
    featureName: "Never",
    tsDocLink: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type",
  },
  {
    index: 6,
    featureName: "Flavoring",
    tsDocLink: "https://brightinventions.pl/blog/branding-flavoring/",
  },
  {
    index: 7,
    featureName: "Overload",
    tsDocLink: "https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads",
  },
  {
    index: 8,
    featureName: "Template literal types",
    tsDocLink: "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html",
  },
  {
    index: 9,
    featureName: "Enums",
    tsDocLink: "https://www.typescriptlang.org/docs/handbook/enums.html",
  },
  {
    index: 10,
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
  async render(): Promise<HTMLElement> {
    this.assertChapter();

    const feature = getFeatureByIndex(this.index);

    if (!feature) {
      return NOT_FOUND_SLIDE.render();
    }

    /**
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     */

    const slide = new Slide([
      Title.withText(feature.featureName),
      Link.withText("Go to documentation").withHref(feature.tsDocLink).withTargetBlank(),
    ]);
    return slide.render();
  }

  assertChapter(): asserts this is { chapterIndex: ChapterIndex } {
    if (typeof this.chapterIndex !== "number") {
      throw new Error("Chapter index is not a number");
    }
  }

  constructor() {
    super([]);
  }
}
