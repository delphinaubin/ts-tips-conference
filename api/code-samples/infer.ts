type Snake = "a-snake";
type Toto = "aSnake";

type ss<T> = T extends `${infer first}-${infer rest}` ? `${first}${ss<Capitalize<rest>>}` : T;
// declare function snakeCaseToUpperCase<T extends string>(toto: T): ss<T>

// const result = snakeCaseToUpperCase('a-cat' as const) //?^

type Delphin = ss<"del-phinus">;
let a: Delphin;

const ageByAnimal = {
  aCat: 32,
  aSnake: 12,
} as const;

interface KnownTsFeatures {
  union: true;
  infer: false;
}

type MyTypescriptLevel<T> = T extends { union: true }
  ? T extends { infer: true }
    ? 100
    : 40
  : T extends { infer: true }
    ? 60
    : 0;


type Locales = "fr-FR" | "fr-MA" | "fr-CH" | "en-GB" | "en-US" | "es-ES"

type ExtractCountry<L extends string> = L extends `${string}-${infer Country}` ? Country : never
type ExtractLang<L extends string> = L extends `${infer Lang}-${string}` ? Lang : never

type Country = ExtractCountry<Locales> // "FR" | "MA" | "CH" | "GB" | "US" | "ES"
type Lang = ExtractLang<Locales> // "fr" | "en" | "es"


