import { removeSummaryDuplicates } from "@angular/compiler";
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, RouteConfigLoadStart, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ComparePokemonModalComponent } from "../modals/compare-pokemon.modal.component";
import { PokemonService } from "./pokemon.service";

@Component({
    templateUrl: './pokemon-compare.component.html'
})

export class ComparePokemonComponent {

    hp: string;
    attack: string;
    defense: string;
    specialAttack: string;
    specialDefense: string;
    speed: string;
    pokemons: any[] = [];
    compare: any;
    selectedComparePokemon: any;
    selectedComparePokemonTo: any;

    constructor(private route: ActivatedRoute,
                private pokemonService: PokemonService,
                public matDialog: MatDialog){        
          this.getPokemons();
            
              this.route.url
              .subscribe((response: any) => {
                  //console.log(response[2].path);
                  //this.compare = this.pokemonService.getPokemon(response[2].path);
                  if(response[2].path != 'empty') {
                      this.pokemonService.getPokemon(response[2].path)
                      .subscribe((response: any) => {
                          console.log(response.name);
                          this.compare = response.name;
                          console.log(this.compare);
                        })
                  }       
              });
       
         
    }

    openCompareModal(compare: any, compareTo: any) {
        const modalDialog = 
                this.matDialog.open(ComparePokemonModalComponent, {
                disableClose: true,
                hasBackdrop: true,
                id: "details-modal-component",
                height: "auto",
                width: "600px",
                data: { compare: compare, compareTo: compareTo },
                closeOnNavigation: true
            });
    }

    getPokemons() {
        this.pokemonService.getAllPokemon()
        .subscribe((response: any) => {
            response.results.forEach(result => {
                this.pokemonService.getPokemon(result.name)
                .subscribe((uniqResponse: any) => {
                    this.pokemons.push(uniqResponse);
                    this.pokemons.sort((a, b) => a.id > b. id ? 1 : -1);
                })
            });
        })
    }
}