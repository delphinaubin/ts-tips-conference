interface Duck {
  talk: "Coin coin";
}

interface PlasticDuck {
  talk: "Coin coin";
}

function startPairProgramingWith(toy: PlasticDuck) {}

const animal: Duck = {
  talk: "Coin coin",
};

startPairProgramingWith(animal); //✅: 🦆 + 🧑‍💻 = 🤯
