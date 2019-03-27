// importing the moves,types and the pokemon class
import {
  pokemonmoves,
  energyTypes,
  Pokemon
} from '../pokemon.js';

// The Pikachu class. In here the basic pokemon stats get defined.
export class Charmeleon extends Pokemon{
   name = "Charmeleon";
   energyType = energyTypes.fire;
   hitpoints = 60;
   health = 60;
   weakness = [
     {
       'energyType' : energyTypes.water ,
       'multiplier' : 2
     }
   ];

   resistance = [
     {
     'energyType' : energyTypes.lighting ,
     'value'  : 10
     }
   ];

   moves = {
     headbutt: pokemonmoves.headbutt ,
     flare: pokemonmoves.flare
   };
}
