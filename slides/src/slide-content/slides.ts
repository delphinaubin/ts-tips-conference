import { CodeLanguage, CodeSteps } from "../slide-framework/block/code/code.block";
import { SlideTransition } from "../slide-framework/block/slide.block";
import { Link, Speaker } from "./models";

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

export interface ImageSlideContent {
  type: "image";
  title?: string;
  imageSrc: string;
}

export interface GifSlideContent {
  type: "gif";
  title?: string;
  gifSrc: string;
}

export interface SpeakersSlideContent {
  type: "speakers";
  title?: string;
  speakers: Speaker[];
}
export interface LinksSlideContent {
  type: "links";
  title?: string;
  links: Link[];
}

export interface ResumeSlideContent {
  type: "resume";
  title?: string;
  bullets: string[];
}

export type SlideContent = (
  | FirstSlideContent
  | TitleSlideContent
  | ImageSlideContent
  | GifSlideContent
  | CodeSlideContent
  | SpeakersSlideContent
  | LinksSlideContent
  | ResumeSlideContent
  | CompiledCodeSlideContent
) & { transition?: SlideTransition };
