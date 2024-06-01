type LangAndCountry = {
  lang: string;
  country: string;
};
type Locale = {
  locale: string;
};
type I18N = LangAndCountry & Locale;
// { lang: string, country: string, locale: string }

function toI18N(l: LangAndCountry | Locale): I18N {
  // ... fill the missing information
}

toI18N({ lang: "fr", country: "CH" });
// --> { lang: "fr", country: "CH", locale: 'fr-CH'}

toI18N({ locale: "fr-MA" });
// --> { lang: "fr", country: "MA", locale: 'fr-MA'}

toI18N({
  locale: "fr-MA",
  lang: "es",
  country: "ES",
}); // --> 🤯 But TS let me do that 😢
