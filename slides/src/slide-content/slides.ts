import { CodeLanguage, CodeSteps } from "../slide-framework/block/code/code.block";
import { SlideTransition } from "../slide-framework/block/slide-transition";

/*
interface SlideContent {
  type: string;
  title?: string;
  subtitle?: string;
  fileName?: string;
  fileNames: string[];
  imageSrc?: string;
  bullets: string[];
  backgroundImage?: string;
  steps?: CodeSteps;
  language?: CodeLanguage;
  languages?: CodeLanguage[];
} */

export interface FirstSlideContent {
  type: string;
  imageUrl: string;
  title: string;
  backgroundImage?: string;
}

export interface TitleSlideContent {
  type: string;
  title: string;
  subtitle?: string;
}

export interface ImageSlideContent {
  type: string;
  title?: string;
  imageSrc: string;
}

export interface CodeSlideContent {
  type: string;
  title?: string;
  fileName: string;
  steps?: CodeSteps;
  language?: CodeLanguage;
}

export interface MultiCodeSlideContent {
  type: string;
  title?: string;
  fileNames: string[];
  steps?: CodeSteps[];
  languages?: CodeLanguage[];
}

export interface CompiledCodeSlideContent {
  type: string;
  title?: string;
  fileName: string;
}

export interface ResumeSlideContent {
  type: string;
  title: string;
  bullets: string[];
}
export interface FeatureSlideContent {
  type: string;
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
) & { transition?: SlideTransition; autoAnimate?: boolean };
