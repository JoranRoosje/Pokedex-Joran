import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IPokemon } from "./pokemon";
import { PokemonService } from "./pokemon.service";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetailsPokemonModalComponent } from "../modals/details-pokemon.modal.component";
import { cpuUsage } from "process";
import { Observable } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { AbstractClassPart } from "@angular/compiler/src/output/output_ast";


@Component({
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
    
    constructor(private router: Router,
                private pokemonService: PokemonService,
                public matDialog: MatDialog) {
                    // this.pokemonService.getPokemons();
                    this.totalPokemons = this.GenOne; /*Change Gens here!! (When page first loads)*/ 
                    this.currentGen = 'Gen I';

    }
    pokemons: any[] = [];
    filteredPokemon: any[] = [];
    pokemon: any;
    private _pokemonListFilter: string;
    get pokemonListFilter(): string {
        return this._pokemonListFilter;
    }
    set pokemonListFilter(value: string) {
        this._pokemonListFilter = value;
        //this.performFilter(this.pokemonListFilter);
        this.filteredPokemon = this.pokemonListFilter ? this.performFilter(this.pokemonListFilter) : this.pokemons;
    }
    
    page = 1;
    offset = '0';
    totalPokemons: number = 0;
    GenOne: number = 151;
    GenTwo: number = 251;
    GenThree: number = 386;
    GenFour: number = 493;
    GenFive: number = 649;
    GenSix: number = 719;
    GenSeven: number = 809;
    GenEight: number = 898;
    color = "golden";
    //pokemonLimit = 151;
    //id: number = 0;
    types: string;
    isFavorite: boolean = false;
    dummyBool: boolean;
    itemsPerPage: number = 10;
    pokemonName: string;
    currentGen: string;
    key: string = 'id';
    reverse: boolean = false;

    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    
    ngOnInit(): void {
        this.getPokemons();
        this._pokemonListFilter = '';
        this.filteredPokemon = this.pokemons;
    }
    
    performFilter(filterBy: string): any[] {
       filterBy = filterBy.toLocaleLowerCase();
       this.pokemonService.getPokemons(10, this.offset + 0)
       .subscribe((response: any) => {
         response.results.forEach(result => {
           this.pokemonService.getPokemon(result.name).
           subscribe((uniqResponse: any) => {
                this.filteredPokemon = this.pokemons.filter((uniqResponse) => uniqResponse.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
                this.pokemons.sort((x, y) => x.id > y.id ? 1 : -1);
            });
        });
    });
    return this.filteredPokemon;
    }
  
    checkForFavorite(id: number): boolean {
        if(this.pokemonService.favorites.find(x => x.id == id)) {
            this.isFavorite = !this.isFavorite;
            return this.isFavorite;
        }
        else {
            return this.isFavorite;
        }
    }

    getPokemons(){
        // this.pokemonService.getPokemons(10, this.offset + 0)
        // .subscribe((response: any) => {
        //     response.count = this.totalPokemons;
        //     response.results.forEach(result => {
        //         this.pokemonService.getPokemon(result.name)
        //         .subscribe((uniqResponse: any) => {
        //             if(uniqResponse.id <= this.totalPokemons) { /*Change Gens Here!*/
        //                 this.pokemons.push(uniqResponse);
        //                 console.log(this.pokemons);
        //                 this.pokemons.sort((a, b) => a.id > b.id ? 1: -1);
        //                 //this.pokemons.sort((x, y) => x.id < y.id ? -1 : x.id > y.id ? 1 : 0);                  
        //             }
        //         });
        //     });
        // });

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
    
    toggleFavorite(pokemon: any) {
        if(!this.pokemonService.favorites.find(x => x.name == pokemon.name)){
            this.isFavorite = true;
            this.pokemonService.favorites.push(pokemon);
            //console.log(this.isFavorite);
        }
        else {
            this.isFavorite = false;
            //console.log(this.isFavorite);
            for(var i = 0; i < this.pokemonService.favorites.length; i++) {
                if(this.pokemonService.favorites[i].id == pokemon.id) {
                    this.pokemonService.favorites.splice(i, 1);
                }
            }
        }
        this.isFavorite = false;
    }


    ifFavorite(id: number): boolean{
        if(this.pokemonService.favorites.find(x => x.id == id)) {
            return true;
        }
        else {
            return false;
        }
    }

    getGen(gen: number) {
        this.totalPokemons = gen;
        console.log(this.totalPokemons);
    }

    changeGen(newGen: string) {
        this.currentGen = newGen;
    }

     pageTitle: string = 'Pokédex';
    // pokemonId: number;
    // pokemonName: string;
    // pokemonType: string[];
    // pokemon: IPokemon;
    // showDeleteUpdate: boolean = false;
    // isSelected: boolean = false;

    // openDeleteModal(id: number){
    //     const modalDialog = 
    //         this.matDialog.open(DeletePokemonModalComponent, {
    //         hasBackdrop: true,
    //         disableClose: true,
    //         id: "delete-modal-component",
    //         height: "auto",
    //         width: "auto",
    //         backdropClass: "dark-backdrop",
    //         data:  { id: id },
    //         closeOnNavigation: true
    //     });
    // }

    // openUpdateModal(id: number, name: string, type: string[]) {
    //     {
    //         const modalDialog = 
    //             this.matDialog.open(UpdatePokemonModalComponent, {
    //             disableClose: true,
    //             id: "update-modal-component",
    //             height: "auto",
    //             width: "auto",
    //             backdropClass: "dark-backdrop",
    //             hasBackdrop: true,
    //             data: { id: id, name: name, type: type },
    //             closeOnNavigation: true
    //         });
    //     }
    // }
    // openAddModal()
    // {
    //     const modalDialog = this.matDialog.open(AddPokemonModalComponent, {
    //         disableClose: true,
    //         id: "add-modal-component",
    //         height: "auto",
    //         width: "auto",
    //         backdropClass: "dark-backdrop",
    //         hasBackdrop: true,
    //         closeOnNavigation: true
    //         //data: { id: id, name: name, type: type }
    //     });
    // }

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

    // getPokemons(): IPokemon[] {
    //     return this.pokemonService.getPokemons();
    // }


    // showButtons(show: boolean): void {
    //     this.showDeleteUpdate = show;
    //     console.log(this.showDeleteUpdate)
    // }

    /*I do not know if these were truly necessary, but this was my solution to get and send the id's
    so i could move the Delete and Update buttons outside of the table*/ 
    // highlightPokemon(id: number, name: string, type: string[]): void{
    //     this.pokemonId = id;
    //     this.pokemonName = name;
    //     this.pokemonType = type;
    //     console.log(this.pokemonId);
    //     this.getPokemons().map(x => x.isSelected = false);
    //     this.getPokemons().find(x => x.pokemonId === id).isSelected = true;
    // }
    // sendId(): number {
    //     return this.pokemonId;
    // }
}