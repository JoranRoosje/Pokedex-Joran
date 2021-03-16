import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { PokemonService } from "../pokemon/pokemon.service";

@Component({
    templateUrl: './compare-pokemon.modal.component.html'
})

export class ComparePokemonModalComponent {
    public radarChartOptions = {
        responsive: true,
        scale: {
            ticks: {
                suggestedMin: 0
            }
        }
    };
    public radarChartLabels = ['Hp','Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'];
    public radarChartType = 'radar';
    public radarChartLegend = false;
    public radarChartData = [
        {
            data: []
        },
        {
            data: []
        }
    ]
    constructor(@Inject(MAT_DIALOG_DATA) public data: {compare: any, compareTo: any},
                public dialogRef: MatDialogRef<ComparePokemonModalComponent>,
                private pokemonService: PokemonService) {
                    console.log(this.data.compare);
                    console.log(this.data.compareTo);
                    this.pokemonService.getPokemon(this.data.compare)
                    .subscribe((response: any) => {
                        this.hp = response.stats[0].base_stat;
                        this.attack = response.stats[1].base_stat;
                        this.defense = response.stats[2].base_stat;
                        this.specialAtack = response.stats[3].base_stat;
                        this.specialDefense = response.stats[4].base_stat;
                        this.speed = response.stats[5].base_stat;
                    });
                    this.pokemonService.getPokemon(this.data.compareTo)
                    .subscribe((response: any) => {
                        this.radarChartData = [
                            {
                                data: [this.hp, this.attack, this.defense, this.specialAtack, this.specialDefense, this.speed ]
                            },
                             {
                                 data: [response.stats[0].base_stat, response.stats[1].base_stat, response.stats[2].base_stat, response.stats[3].base_stat, response.stats[4].base_stat, response.stats[5].base_stat]
                             }
                        ]
                    })

                    
    }
    closeModal() {
        this.dialogRef.close();
    }
        hp: number;
        attack: number;
        defense: number;
        specialAtack: number;
        specialDefense: number;
        speed: number;

}