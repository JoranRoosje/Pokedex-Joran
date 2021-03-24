import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { RouterModule } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddPokemonModalComponent } from '../modals/add-pokemon.modal.component';
import { FavoritePokemonComponent } from './pokemon-favorite.component';
import { DetailsPokemonModalComponent } from '../modals/details-pokemon.modal.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ChartsModule } from 'ng2-charts';
import { ComparePokemonComponent } from './pokemon-compare.component';
import { ComparePokemonModalComponent } from '../modals/compare-pokemon.modal.component';
//import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        NoopAnimationsModule,
        HttpClientModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        ChartsModule,
        Ng2OrderModule,
        //NgSelectModule,
        RouterModule.forChild([
            { path: 'pokemons', component: PokemonListComponent },
            { path: 'pokemons/favorites', component: FavoritePokemonComponent },
            { path: 'pokemons/compare/:name?', component: ComparePokemonComponent },
            //{ path: 'pokemons/compare', component: ComparePokemonComponent }
        ])
    ],
    declarations: [
        PokemonListComponent,
        AddPokemonModalComponent,
        FavoritePokemonComponent,
        DetailsPokemonModalComponent,
        ComparePokemonComponent,
        ComparePokemonModalComponent
    ],
    providers: [
        PokemonService
    ],
    entryComponents: [DetailsPokemonModalComponent, ComparePokemonModalComponent]
})
export class PokemonModule { }
