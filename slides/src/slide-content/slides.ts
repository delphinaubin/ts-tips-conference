/*
// Un comment to start the presentation
interface SlideContent {
  type: string;
  title?: string;
  subtitle?: string;
  fileName?: string;
  imageSrc?: string;
} */

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

export const slides: SlideContent[] = [
  {
    type: "speakers",
    speakers: [
      {
        name: "Aurélien Loyer",
        twitter: "@AurelienLoyer",
        bio: "Software Engineering Leader @QIMA",
        pictureUrl:
          "https://s3.amazonaws.com/media-p.slid.es/uploads/637110/images/8938477/pasted-from-clipboard.png",
      },
      {
        name: "Delphin Aubin",
        twitter: "@DelphinAubin",
        bio: "Software Engineering Leader @Zenika",
        pictureUrl:
          "https://media.licdn.com/dms/image/C5603AQHrKSQGMRCNcQ/profile-displayphoto-shrink_800_800/0/1562843077115?e=2147483647&v=beta&t=PtU608bOQDzZo3R9fPkkO-D_0SzvlDtbBuWBRD2fku0",
      }
    ],
  },
  {
    type: "title",
    title: "And wait...",
    subtitle: "There is more!",
  },
  {
    type: "code",
    title: "You can do that:",
    fileName: "json-code-sample.code.ts",
  },
  {
    type: "image",
    imageSrc:
      "https://wallpapers.com/images/hd/cool-picture-art-of-lion-rlst9ftvz1dvvn37.jpg",
  },
];

export type SlideContent =
  | TitleSlideContent
  | ImageSlideContent
  | CodeSlideContent
  | SpeakersSlideContent
