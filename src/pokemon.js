let text = "";

function writeText(text) {
  const eventScreen = document.getElementById('eventscreen');

  const element = document.createElement('p');
  element.id = "result";

  element.innerText = text;

  eventScreen.appendChild(element);
}

export const energyTypes = {
  lighting: "lightning",
  water: "water",
  fire: 'fire',
  fighting: "fighting"
}

export const pokemonmoves = {
  electricring: {
    name: 'Electric ring',
    damage: 50
  },
  pikapunch: {
    name: 'Pika punch',
    damage: 20
  },
  headbutt: {
    name: 'Headbutt',
    damage: 10
  },
  headbutt: {
    name: 'Headbutt',
    damage: 10
  },
  flare: {
    name: 'Flare',
    damage: 30
  }
}

export class Pokemon {
  constructor({
    nickname
  }) {
    this.nickname = nickname;
  }


  attack(target, attack) {
    if (!attack) {
      return;
    }

    if (!target) {
      return;
    }

    let damage = attack.damage;
    let targetName = target.nickname || target.name;
    const targetWeakness = target.weakness.find(weakness => weakness.energyType === this.energyType);
    const targetResistance = target.resistance.find(resistance => resistance.energyType === this.energyType);
    if (targetWeakness) {
      damage -= targetWeakness.multiplier;

      text = "It's super very effective";
      writeText(text);

    }
    if (targetResistance) {
      damage -= targetResistance.value;

      text = "It's not very effective";
      writeText(text);
    }

    target.health -= Math.round(damage);

    // when target faints
    if (target.health <= 0) {
      target.health = 0;
      text = targetName += " has fainted!";
      writeText(text);
    }
  }
}


/*
export class Pokebag {
  constructor() {
    pokemon_m = [];
  }

  add(pokemon) {
    pokemon_m.push(pokemon);
  }

  remove() {
    pokemon_m = [];
  }
}
*/
