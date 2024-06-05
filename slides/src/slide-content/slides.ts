import { CodeLanguage, CodeSteps } from "../slide-framework/block/code/code.block";
import { SlideTransition } from "../slide-framework/block/slide-transition";
import { RenderBlock } from "../slide-framework/render-block";

type SlideType =
  | "first"
  | "title"
  | "image"
  | "code"
  | "compiledCode"
  | "resume"
  | "list"
  | "tsFeature"
  | "custom";

export interface FirstSlideContent {
  type: SlideType;
  imageUrl: string;
  title: string;
  backgroundImage?: string;
  overlay?: {
    color: string;
    opacity: number;
  };
}

export interface TitleSlideContent {
  type: SlideType;
  title: string;
  subtitle?: string;
}

export interface ImageSlideContent {
  type: SlideType;
  title?: string;
  imageSrc: string;
}

export interface CodeSlideContent {
  type: SlideType;
  title?: string;
  fileName: string;
  steps?: CodeSteps;
  language?: CodeLanguage;
}

export interface CompiledCodeSlideContent {
  type: SlideType;
  title?: string;
  fileName: string;
}

export interface ResumeSlideContent {
  type: SlideType;
  title: string;
  bullets: string[];
}

export interface ListSlideContent {
  type: SlideType;
  title: string;
  items: string[];
}

export interface TsFeatureSlideContent {
  type: SlideType;
}

export interface CustomSlideContent {
  type: SlideType;
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
