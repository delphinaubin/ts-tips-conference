
import { CodeFromFile } from "../slide-framework/block/code/code-from-file.block";
import { Slide } from "../slide-framework/block/slide.block";
import { Subtitle } from "../slide-framework/block/subtitle.block";
import { Title } from "../slide-framework/block/title/title.block";
import { TitleSlide } from "../slide/title.slide";


const isSlide = new Slide([
    Subtitle.withText("<code>is<code> (User-Defined Type Guards)"), // TODO: Challenge this title with our friend GPT
    Subtitle.withText('<br>'),
    new CodeFromFile('is.ts'),
    
]);

export const isSlides = [
    new TitleSlide("<i>is</i> won't save you when the bullets fly", "Chapter 2.").withTransition(
        "none-in slide-out",
    ),
    isSlide,
];

export function computeSummarySlide(slides: Slide[] = []): Slide {
    return new Slide([
        Title.withText("Summary"),
        ...getAllTitleSlidesTitle(slides).map((s) => Subtitle.withText(s)),
    ]);
}

// 🙅‍♂️ Pas bien
// function getAllTitleSlidesTitle(slides: Slide[]): string[] {
//   return (slides.filter(slide => slide instanceof TitleSlide) as TitleSlide[]).map(slide => slide.title);
// }

// 👍 Bien
// function getAllTitleSlidesTitle(slides: Slide[]): string[] {
//   return slides.filter((slide): slide is TitleSlide => slide instanceof TitleSlide).map(slide => slide.title);
// }

// 🚀 Encore mieux
function getAllTitleSlidesTitle(slides: Slide[]): string[] {
    return slides.filter(isTitleSlide).map((slide) => slide.title);
}

function isTitleSlide(slide: Slide): slide is TitleSlide {
    return slide instanceof TitleSlide;
}

