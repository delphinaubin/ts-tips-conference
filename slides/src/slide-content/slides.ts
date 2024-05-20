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
    title: "<i>Strictness</i> won't save you when the bullets fly",
    // subtitle: "",
  },
  {
    type: "title",
    title: "Never say <i>never</i>",
    // subtitle: "",
  },
  {
    type: "title",
    title: "He’s all <i>|</i> and no action",
    // subtitle: "",
  },
  {
    type: "title",
    title: "<i>Infer</i> this mate",
    // subtitle: "",
  },
  {
    type: "title",
    title: "A dash of <i>flavoring</i>",
    // subtitle: "",
  },
  {
    type: "title",
    title: "Don't <i>overload</i> me with your problems, mate.",
    // subtitle: "",
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
  | FirstSlideContent
  | TitleSlideContent
  | ImageSlideContent
  | CodeSlideContent
  | SpeakersSlideContent
