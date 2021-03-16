import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DetailsPokemonModalComponent } from "../modals/details-pokemon.modal.component";
import { IPokemon } from "./pokemon";
import { PokemonService } from "./pokemon.service";

@Component({
    templateUrl: './pokemon-favorite.component.html'
})

export class FavoritePokemonComponent {
    
    constructor(public pokemonService: PokemonService,
                public matDialog: MatDialog) {

    }
    
    pageTitle: string = 'Favorite Pokémons'

    populateFavorites(): any []{
        this.pokemonService.favorites.sort((a, b) => a.id > b.id ? 1: -1);
       return this.pokemonService.favorites;
    }

    removeFromFavorites(id: number) {
        for(var i = 0; i < this.pokemonService.favorites.length; i++) {
            if(this.pokemonService.favorites[i].id == id) {
                this.pokemonService.favorites.splice(i, 1);
            }
        }
    }

    openDetailsModal(id: number, name: string, type: string[], imageUrl: string) {
        const modalDialog = 
                this.matDialog.open(DetailsPokemonModalComponent, {
                disableClose: false,
                hasBackdrop: true,
                id: "details-modal-component",
                height: "auto",
                width: "600px",
                data: { id: id, name: name, type: type, imageUrl: imageUrl },
                closeOnNavigation: true
            });
    }

}