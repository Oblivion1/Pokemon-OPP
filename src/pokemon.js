let text = "";

function writeText(text) {
  const eventScreen = document.getElementById('eventscreen');

  const element = document.createElement('p');
  element.id = "result";

  element.innerText = text;

  eventScreen.appendChild(element);
}

// All energy types available.
export const energyTypes = {
  lighting: "lightning",
  water: "water",
  fire: 'fire',
  fighting: "fighting"
}

// All moves available.
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
  flare: {
    name: 'Flare',
    damage: 30
  }
}

// The main pokemon class.
export class Pokemon {
  constructor({
    nickname
  }) {
    this.nickname = nickname;
  }

  // The attack method.
  attack(target, attack){
    // if the pokemon is fainted
    if(!this.health){
      text = "Can't attack if your fainted";
      writeText(text);
      return;
    }
    // if there is no attack
    if (!attack) {
      text = "No attack selected ";
      writeText(text);
      return;
    }
    // if there is no target
    if (!target) {
      text = "No target selected ";
      writeText(text);
      return;
    }
    target.takeDamage(attack.damage,this.energyType);
  }

  // the method that handles the damage calculation
    takeDamage(damage,type){
    let name = this.nickname || this.name;
    const weakness = this.weakness.find(weakness => weakness.energyType === type);
    const resistance = this.resistance.find(resistance => resistance.energyType === type);
    // there is an weakness then apply the an multiplier
    if(weakness){
      damage -= weakness.multiplier;
      text = "It's super very effective";
      writeText(text);
    }
    // there is an weakness then reduce the damage of the move
    if(resistance){
      damage -= resistance.value;
      text = "It's not very effective";
      writeText(text);
    }
    // rounding the damage
    this.health -= Math.round(damage);


    // pokemon has fainted if health is 0 or lower
    if(this.health <= 0){
      this.health = 0;
      text = name += " has fainted!";
      writeText(text);
    }
    else{
      text = name += " has " + this.health + " health remaining";
      writeText(text);
    }
  }
}


// old code for pokebag

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
