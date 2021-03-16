import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { PokemonService } from "../pokemon/pokemon.service";

@Component({
    templateUrl: './add-pokemon.modal.component.html'
})

export class AddPokemonModalComponent {

    constructor(//@Inject(MAT_DIALOG_DATA) public data: {id: number, name: string, type: string[] },
                public dialogRef: MatDialogRef<AddPokemonModalComponent>,
                private pokemonService: PokemonService) {
                }
    
    // addPokemon(id: number, name: string, type: string[]): void {
    //     this.pokemonService.addPokemon(id, name, type);
    // }

    closeModal() {
        this.dialogRef.close();
    }

}