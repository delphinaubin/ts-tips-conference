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
  footer: string;
}

export interface TitleSlideContent {
  type: "title";
  title: string;
  subtitle?: string;
}

export interface CodeSlideContent {
  type: "code";
  title: string;
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

export const slides: SlideContent[] = [
  {
    type: "first",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png",
    title: "The 20 most profitable typescript minutes of your life!",
    footer: "@AurelienLoyer / @DelphinAubin",
  },
  {
    type: "speakers",
    speakers: [
      {
        name: "Aurélien Loyer",
        twitter: "@AurelienLoyer",
        bio: "Software Engineering Leader @QIMA",
        pictureUrl: "/public/aurelien-loyer.png",
      },
      {
        name: "Delphin Aubin",
        twitter: "@DelphinAubin",
        bio: "Software Engineering Leader @Zenika",
        pictureUrl: "/public/delphin-aubin.jpeg",
      }
    ],
  },

  /*
  ** 🚀 Part.1 -------------------------
  */
  {
    type: "title",
    title: "<i>Strictness</i> won't save you when the bullets fly",
    subtitle: "Chapter 1.",
  },

  /*
  ** 🚀 Part.2 -------------------------
  */

  // is slide
  
  /*
  ** 🚀 Part.3 -------------------------
  */

  {
    type: "title",
    title: "Never say <i>never</i>",
    subtitle: "Chapter 2.",
  },
  {
    type: "title",
    title: "With <i>union</i> we stand",
    subtitle: "Chapter 3.",
  },
  {
    type: "title",
    title: "<i>Infer</i> this mate!",
    subtitle: "Chapter 4.",
  },
  {
    type: "title",
    title: "A dash of <i>flavoring</i>",
    subtitle: "Chapter 5.",
  },
  {
    type: "title",
    title: "Don't <i>overload</i> me with your problems, mate.",
    subtitle: "Chapter 6.",
  },
];

export type SlideContent =
  | FirstSlideContent
  | TitleSlideContent
  | ImageSlideContent
  | CodeSlideContent
  | SpeakersSlideContent
  | LinksSlideContent;
