const countries = {
  ES: "ES",
  FR: "FR",
} as const;

type Countries = typeof countries;
type Country = Countries[keyof Countries];
// "Spain" | "France"

function loadCountry(country: Country) {}

loadCountry("Timbuktu"); // ❌
loadCountry("Spain"); // ✅
loadCountry(countries.ES); // ✅
