import { AfterViewInit, Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { PokemonService } from "../pokemon/pokemon.service";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    templateUrl: './delete-pokemon.modal.component.html',
    styleUrls: ['./delete-pokemon.modal.component.css']
})

export class DeletePokemonModalComponent /*implements OnInit, AfterViewInit*/ {
   
    constructor(@Inject(MAT_DIALOG_DATA) public data: { id: number },
                public dialogRef: MatDialogRef<DeletePokemonModalComponent>,
                private pokemonService: PokemonService) {
                    //this.pokemonName = this.pokemonService.getPokemon(this.data.id).pokemonName;
                }

    // ngAfterViewInit(): void {
    //     this.dialogRef.backdropClick().subscribe(() => {
    //         this.dialogRef.close();
    //     })
    // }

    // ngOnInit() {
         
    // }

    pokemonName: string;

    // deletePokemon() {
    //     this.pokemonService.deletePokemon(this.data.id);
    //     this.closeModal();
    // }

    closeModal() {
        this.dialogRef.close();
    }
}