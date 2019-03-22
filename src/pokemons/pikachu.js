import {
  pokemonmoves,
  energyTypes,
  Pokemon
} from '../pokemon.js';

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

   moves = [
     pokemonmoves.electricring ,
     pokemonmoves.pikapunch
   ];
}
