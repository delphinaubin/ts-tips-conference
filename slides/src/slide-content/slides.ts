/*
// Un comment to start the presentation
interface SlideContent {
  type: string;
  title?: string;
  subtitle?: string;
  fileName?: string;
  imageSrc?: string;
} */

import { CodeLanguage, CodeSteps } from "../slide-framework/block/code/code.block";
export interface FirstSlideContent {
  type: "first";
  imageUrl: string;
  title: string;
  footer: string;
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

export interface SpeakersSlideContent {
  type: "speakers";
  title?: string;
  speakers: Speaker[];
}

export interface Speaker {
  name: string;
  twitter: string;
  bio: string;
  pictureUrl: string;
}

export interface LinksSlideContent {
  type: "links";
  title?: string;
  links: Link[];
}

export interface Link {
  label: string;
  url: string;
}

export type SlideContent =
  | FirstSlideContent
  | TitleSlideContent
  | ImageSlideContent
  | CodeSlideContent
  | SpeakersSlideContent
  | LinksSlideContent
  | CompiledCodeSlideContent;
