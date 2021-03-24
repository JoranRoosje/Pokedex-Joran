import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from "./user/login.component";

const ROUTES = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
    
]
@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
   
}