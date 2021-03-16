import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { IPokemon } from "../pokemon/pokemon";
import { PokemonService } from "../pokemon/pokemon.service";

@Component({
    templateUrl: './update-pokemon.modal.component.html'
})

export class UpdatePokemonModalComponent implements OnInit {
    
    constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number, name: string, type: string[]},
                public dialogRef: MatDialogRef<UpdatePokemonModalComponent>,
                private pokemonService: PokemonService){}

   
    //dummyPokemon: IPokemon;
    pokemonName: string;
    pokemonType: string[];

    ngOnInit(): void {
        //this.dummyPokemon = this.pokemonService.getPokemon(this.data.id);
        this.pokemonName = this.data.name;
        this.pokemonType = this.data.type;
    }

    // updatePokemon(id: number, name: string, type: string[]): void {
    //     this.pokemonService.updatePokemon(id, name, type);
    // }

    closeModal() {
        this.dialogRef.close();
    }
}