import { Component, ElementRef, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { PokemonService } from "../pokemon/pokemon.service";
import { Chart } from 'node_modules/chart.js';


@Component({
    templateUrl: './details-pokemon.modal.component.html'
})

export class DetailsPokemonModalComponent implements OnInit {

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
        // {
        //     data: []
        // }
    ]

    constructor(@Inject(MAT_DIALOG_DATA) public data: { id: number, name: string, type: string[], imageUrl: string },
    public dialogRef: MatDialogRef<DetailsPokemonModalComponent>,
                private pokemonService: PokemonService,
                private elementRef: ElementRef) {
                    
                    this.pokemonService.getPokemon(this.data.name)
                    .subscribe((response: any) => {
                        this.hp = response.stats[0].base_stat;
                        this.attack = response.stats[1].base_stat;
                        this.defense = response.stats[2].base_stat;
                        this.specialAtack = response.stats[3].base_stat;
                        this.specialDefense = response.stats[4].base_stat;
                        this.speed = response.stats[5].base_stat;
                        this.totalStats = this.hp + this.attack + this.defense + this.specialAtack + this.specialDefense + this.speed;
                        this.radarChartData = [
                            {
                                data: [this.hp, this.attack, this.defense, this.specialAtack, this.specialDefense, this.speed ]
                            },
                            // {
                            //     data: [250, 134, 160, 154, 125, 150]
                            // }
                        ]
                        this.mainType = response.types[0].type.name;
                        console.log(response);
                        if(typeof response.types[1] === 'undefined') {
                            this.offType = null;
                        }
                        else {
                            this.offType = response.types[1].type.name;
                        }
                        //this.offType = response.types[1].type.name ? this.offType = response.types[1].type.name : this.offType = null;
                        //this.chartit(this.hp, this.attack, this.defense, this.specialAtack, this.specialDefense, this.speed);
                         
                    });
                }

                ngOnInit(): void {
                    
                }
                hp: number;
                attack: number;
                defense: number;
                specialAtack: number;
                specialDefense: number;
                speed: number;
                totalStats: number;
                mainType: string;
                offType: string;

                // chartit(hp: any, attack: any, defense: any, specialAtack: any, specialDefense: any, speed: any ) {
                //     let htmlRef = this.elementRef.nativeElement.querySelector(`#pokeStatChart`);
                //     this.radarChart = new Chart(htmlRef, {
                //         type: 'radar',
                //         data: {
                //             datasets: [{
                //                 data: [hp, attack, defense, specialAtack, specialDefense, speed]
                //             }]
                //         }
                //     });
                // }
                
                
    // getUrl(path: string): string {
    //     if(path){
    //         return path;
    //     }
    //     else {
    //         return 'assets/images/defaultImage.png';
    //     }
    // }

    closeModal() {
        this.dialogRef.close();
    }
}