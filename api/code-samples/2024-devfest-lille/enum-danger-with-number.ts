enum Countries {
  FR = 0,
  ES = 1
}

function loadCountry(country: Countries) {
  // do something with country
  // because I use the country enum I'm sure it exists
  // Sure about that ? 🤔
}

let magicNumber: number = 42

loadCountry(magicNumber) // 😱 It's ok 😱;