import { CodeLanguage, CodeSteps } from "../slide-framework/block/code/code.block";
import { SlideTransition } from "../slide-framework/block/slide.block";

/*
// Un comment to start the presentation
interface SlideContent {
  type: string;
  title?: string;
  subtitle?: string;
  fileName?: string;
  imageSrc?: string;
} */

export interface FirstSlideContent {
  type: "first";
  imageUrl: string;
  title: string;
  backgroundImage?: string;
}

export interface TitleSlideContent {
  type: "title";
  title: string;
  subtitle?: string;
}

export interface ImageSlideContent {
  type: "image";
  title?: string;
  imageSrc: string;
}

export interface CodeSlideContent {
  type: "code";
  title?: string;
  fileName: string;
  steps?: CodeSteps;
  language?: CodeLanguage;
}

export interface MultiCodeSlideContent {
  type: "multiCode";
  title?: string;
  fileNames: string[];
  steps?: CodeSteps[];
  languages?: CodeLanguage[];
}

export interface CompiledCodeSlideContent {
  type: "compiledCode";
  title?: string;
  fileName: string;
}

export interface ResumeSlideContent {
  type: "resume";
  title: string;
  bullets: string[];
}
export interface FeatureSlideContent {
  type: "tsFeature";
}

export type SlideContent = (
  | FirstSlideContent
  | TitleSlideContent
  | ImageSlideContent
  | CodeSlideContent
  | MultiCodeSlideContent
  | CompiledCodeSlideContent
  | ResumeSlideContent
  | FeatureSlideContent
) & { transition?: SlideTransition };
