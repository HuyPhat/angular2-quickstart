/**
 * Created by phathuy on 8/21/16.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgSemanticModule } from 'ng-semantic';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import {AppComponent} from './components/app.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroDetailComponent} from './components/detail/hero-detail.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

import {HeroService} from './services/hero.service';

import {routing} from './components/app.routing';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        NgSemanticModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
    ],
    providers:[HeroService],
    bootstrap: [AppComponent]
})

export class AppModule {
}