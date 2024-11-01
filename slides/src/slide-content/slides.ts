import { CodeLanguage, CodeSteps } from "../slide-framework/block/code/code.block";
import { SlideTransition } from "../slide-framework/block/slide-transition";
import { RenderBlock } from "../slide-framework/render-block";


export interface FirstSlideContent {
  type: "first";
  imageUrl?: string;
  title: string;
  backgroundImage?: string;
  overlay?: {
    color: string;
    opacity: number;
  };
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

export interface ListSlideContent {
  type: "list";
  title: string;
  items: string[];
}

export interface TsFeatureSlideContent {
  type: "tsFeature";
}

export interface CustomSlideContent {
  type: "custom";
  blocks: RenderBlock[];
}

export type SlideContent = (
  | FirstSlideContent
  | TitleSlideContent
  | ImageSlideContent
  | CodeSlideContent
  | CompiledCodeSlideContent
  | ResumeSlideContent
  | ListSlideContent
  | TsFeatureSlideContent
  | CustomSlideContent
) & { transition?: SlideTransition; autoAnimate?: boolean };
