/**
 * Created by phathuy on 8/21/16.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgSemanticModule } from 'ng-semantic';

import {AppComponent} from './components/app.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroDetailComponent} from './components/detail/hero-detail.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

import {HeroService} from './services/hero.service';

import {routing} from './components/app.routing';
// import { routing, APP_ROUTER_PROVIDERS } from "./routes";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        NgSemanticModule,
        routing
    ],
    // providers:[APP_ROUTER_PROVIDERS],
    providers:[HeroService],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}