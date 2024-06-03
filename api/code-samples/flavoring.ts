interface Duck {
  talk: "Coin coin";
  __type?: "Duck";
}

interface PlasticDuck {
  talk: "Coin coin";
  __type?: PlasticDuck;
}

function startPairProgramingWith(toy: PlasticDuck) {}

const animal: Duck = {
  talk: "Coin coin",
};

startPairProgramingWith(animal); //❌: 🎉🍾🎆
