// importing the moves,types and the pokemon class
import {
  pokemonmoves,
  energyTypes,
  Pokemon
} from '../pokemon.js';

// The Pikachu class. In here the basic pokemon stats get defined.
export class Pikachu extends Pokemon{
   name = "Pikachu";
   energyType = energyTypes.lighting;
   hitpoints = 60;
   health = 60;
   weakness = [
     {
       'energyType' : energyTypes.fire ,
       'multiplier' : 1.5
     }
   ];

   resistance = [
     {
     'energyType' : energyTypes.fighting ,
     'value'  :20
     }
   ];
   
   moves = {
     electricRing: pokemonmoves.electricring,
     pikapunch: pokemonmoves.pikapunch
   }
}
