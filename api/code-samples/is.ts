function getAllTitleSlidesTitle(slides: Slide[]): string[] {
    return slides.filter(isTitleSlide).map((slide: TitleSlide) => slide.title);
}

function isTitleSlide(slide: Slide): slide is TitleSlide {
    return slide instanceof TitleSlide;
}