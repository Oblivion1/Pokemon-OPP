
import {
  pokemonmoves,
  energyTypes,
  Pokemon
} from '../pokemon.js';


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

   moves = [
     pokemonmoves.headbutt ,
     pokemonmoves.flare
   ];
}
