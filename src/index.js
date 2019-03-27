// Importing both the Pikachu and Charmeleon
import { Pikachu } from "./pokemons/pikachu.js";
import { Charmeleon } from "./pokemons/charmeleon.js";




//creating the Pokemon
const pokemon1 = new Pikachu({nickname: "Kevon"});
const pokemon2 = new Charmeleon({nickname: "Alonx"});

//execute the pokemon moves
pokemon1.attack(pokemon2,pokemon1.moves.electricRing);
pokemon2.attack(pokemon1,pokemon2.moves.flare);

pokemon1.attack(pokemon2,pokemon1.moves.electricRing);
pokemon2.attack(pokemon1,pokemon2.moves.flare);
