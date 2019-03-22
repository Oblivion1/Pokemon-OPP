
import {
  pokemonmoves,
  energyTypes,
  Pokemon
} from '../pokemon.js';


export class Machop extends Pokemon{
   name = "Machop";
   energyType = energyTypes.fighting;
   hitpoints = 50;
   health = 50;
   weakness = [
     {
       'energyType' : energyTypes.water ,
       'multiplier' : 2
     }
   ];

   resistance = [
     {
     'energyType' : energyTypes.fire ,
     'value'  : 10
     }
   ];

   moves = [
     pokemonmoves.headbutt
   ];
}
