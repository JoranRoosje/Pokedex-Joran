import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { IPokemon } from './pokemon';

@Injectable()

export class PokemonService implements OnDestroy {
  
  constructor(private http: HttpClient) { 
    console.log('Service created');
    //this.getPokemons().map(x => x.isFavorite = false);
    // this.dummyPokemon.pokemonId = 0;
    // this.dummyPokemon.pokemonName = "";
    // this.dummyPokemon.pokemonType = [""];
    // this.dummyPokemon.isFavorite = false;
  }

  //#region pokemons array (objects manually created)
  // private pokemons: IPokemon[] = [{

  //   pokemonId: 1,
  //   pokemonName: "Bulbasaur",
  //   pokemonType: ['Grass', 'Poison'],
  //   imageUrl: 'assets/images/bulbasaur.png',
  //   description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.'
  // },
  // {
  //   pokemonId: 2,
  //   pokemonName: "Ivysaur",
  //   pokemonType: ['Grass', 'Poison'],
  //   imageUrl: 'assets/images/ivysaur.png',
  //   description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.'
  // },
  // {
  //   pokemonId: 3,
  //   pokemonName: "Venusaur",
  //   pokemonType: ['Grass', 'Poison'],
  //   imageUrl: 'assets/images/venusaur.png',
  //   description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.'
  // },
  // {
  //   pokemonId: 4,
  //   pokemonName: "Charmander",
  //   pokemonType: ['Fire'],
  //   imageUrl: 'assets/images/charmander.png',
  //   description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.'
  // },
  // {
  //   pokemonId: 5,
  //   pokemonName: "Charmeleon",
  //   pokemonType: ['Fire'],
  //   imageUrl: 'assets/images/charmeleon.png',
  //   description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.'
  // },
  // {
  //   pokemonId: 6,
  //   pokemonName: "Charizard",
  //   pokemonType: ['Fire', 'Flying'],
  //   imageUrl: 'assets/images/charizard.png',
  //   description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.'
  // },
  // {
  //   pokemonId: 7,
  //   pokemonName: "Squirtle",
  //   pokemonType: ['Water'],
  //   imageUrl: 'assets/images/squirtle.png',
  //   description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.'
  // },
  // {
  //   pokemonId: 8,
  //   pokemonName: "Wartortle",
  //   pokemonType: ['Water'],
  //   imageUrl: 'assets/images/wartortle.png',
  //   description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.'
  // },
  // {
  //   pokemonId: 9,
  //   pokemonName: "Blastoise",
  //   pokemonType: ['Water'],
  //   imageUrl: 'assets/images/blastoise.png',
  //   description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.'
  // }];
  //#endregion
  
  dummyPokemon: IPokemon;
  pokemonId: any;
  pokemonName: any;
  pokemonType: any[];

  favorites   = [];
 

  // getPokemon(id: number): IPokemon {
  //   return this.pokemons.find(x => x.pokemonId === id);
  // }

  // getPokemon(name: string) {
  //   this.http.get(`https://pokeapi.co/api/v2/${name}`)
  // }

  // getPokemons(): IPokemon[] {
  //   return this.pokemons;
  // }

  getPokemons(limit: number, offset: string) {
     return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  }

  getPokemon(name: string) {
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
  getAllPokemon() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  }
  // deletePokemon(id: number) {
  //   for(var i=0; i < this.getPokemons().length; i++){
  //     if(this.getPokemons()[i].pokemonId == id){
  //                 this.getPokemons().splice(i, 1);
  //             }
  //         }
  // }

  // updatePokemon(id: number, name: string, type: string[]): IPokemon {
  //     this.dummyPokemon = this.getPokemon(id);
  //     this.dummyPokemon.pokemonName = name;
  //     this.dummyPokemon.pokemonType = type;
  //     return this.dummyPokemon;
  // }


  // addPokemon(id: number, name: string, type: string[]): IPokemon[] {
  //   if(id && name && type){
  //       this.getPokemons().push({
  //         pokemonId: id,
  //         pokemonName: name,
  //         pokemonType: type
  //       })
  //   }
  //   return this.getPokemons();
  //}
  
  ngOnDestroy(): void {
    console.log('Service destroyed')
  }
}
