import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

/*Declarations*/
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

/*Feature Modules*/
import { PokemonModule } from './pokemon/pokemon.module';
import { AppRoutingModule } from './app-routing.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './user/login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PokemonModule,
    ChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule /*This has to be last for routes to work!*/
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
