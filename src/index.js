
import { Pikachu } from "./pokemons/pikachu.js";
import { Charmeleon } from "./pokemons/charmeleon.js";



const pokemon1 = new Pikachu({nickname: "Kevon"});
const pokemon2 = new Charmeleon({nickname: "Alonx"});

//turn 1
pokemon1.attack(pokemon2,pokemon1.moves[0]);
pokemon2.attack(pokemon1,pokemon2.moves[0]);

console.log(pokemon1.health);
console.log(pokemon2.health);
