import { Image } from "../slide-framework/block/image.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { FirstSlide } from "../slide/first.slide";
import { LinksSlide } from "../slide/links.slide";
import { SpeakersSlide } from "../slide/speakers.slide";

export const firstSlide = new FirstSlide(
    "/public/typescript-logo.png",
    "The 20 most profitable typescript minutes of your life!",
    "@AurelienLoyer / @DelphinAubin",
);

export const speakersSlide = new SpeakersSlide(
    [
        {
            name: "Aurélien Loyer",
            twitter: "@AurelienLoyer",
            bio: "Software Engineering Leader @QIMA",
            pictureUrl: "/public/aurelien-loyer.png",
        },
        {
            name: "Delphin Aubin",
            twitter: "@DelphinAubin",
            bio: "Javascript expert @Zenika",
            pictureUrl: "/public/delphin-aubin.jpeg",
        }
    ]
)

export const linksSlide = new LinksSlide(
    {
        title: "Links 🔗",
        links: [
            { label: "The Lies We Tell Ourselves Using TypeScript", url: "https://portal.gitnation.org/contents/the-lies-we-tell-ourselves-using-typescript" },
            { label: "TypeScript Survival Guide: Life-Saving Tips and Techniques", url: "https://portal.gitnation.org/contents/typescript-survival-guide-life-saving-tips-and-techniques" },
            { label: "Don't use Enums in Typescript, they are very dangerous 😨", url: "https://dev.to/ivanzm123/dont-use-enums-in-typescript-they-are-very-dangerous-57bh" },
        ],
    },
);

export const thanksSlide = new Slide([
    Subtitle.withText("Thank you!"),
    Image.withSrc(
        "/public/thankyou.gif",
    ),
]);