import { Image } from "../slide-framework/block/image.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { FirstSlide } from "../slide/first.slide";
import { LinksSlide } from "../slide/links.slide";
import { SpeakersSlide } from "../slide/speakers.slide";

export const firstSlide = new FirstSlide(
  `The 20 most <span class="barre">painfull</span> profitable typescript minutes of your life!`,
  "/typescript-logo.png",
  "https://images.unsplash.com/photo-1544411047-c491e34a24e0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);

export const speakersSlide = new SpeakersSlide([
  {
    name: "Delphin Aubin",
    twitter: "@DelphinAubin",
    bio: "Javascript expert @Zenika",
    pictureUrl: "/delphin-aubin.jpeg",
  },
  {
    name: "Aurélien Loyer",
    twitter: "@AurelienLoyer",
    bio: "Software Engineering Leader @QIMA",
    pictureUrl: "/aurelien-loyer.png",
  },
]);

export const linksSlide = new LinksSlide("Links 🔗", [
  {
    label: "The Lies We Tell Ourselves Using TypeScript",
    url: "https://portal.gitnation.org/contents/the-lies-we-tell-ourselves-using-typescript",
  },
  {
    label: "TypeScript Survival Guide: Life-Saving Tips and Techniques",
    url: "https://portal.gitnation.org/contents/typescript-survival-guide-life-saving-tips-and-techniques",
  },
  {
    label: "Don't use Enums in Typescript, they are very dangerous 😨",
    url: "https://dev.to/ivanzm123/dont-use-enums-in-typescript-they-are-very-dangerous-57bh",
  },
]);

export const thanksSlide = new Slide([
  Subtitle.withText("🙏🏼 Thank you 🙏🏼"),
  Image.withSrc("/thankyou.gif"),
]);

export const openFeedbackSlide = new Slide([
  Subtitle.withText(`<img style="height: 30vh" src="/openfeedback-qr.png" />`),
  Subtitle.withText("<code style='color: deeppink; font-weight: lighter'>@AurelienLoyer</code>"),
  Subtitle.withText("<code style='color: deeppink; font-weight: lighter'>@DelphinAubin</code>"),
]);
