/**
 * Created by phathuy on 8/21/16.
 */
import {Component,OnInit} from '@angular/core';
import { SEMANTIC_COMPONENTS } from "ng-semantic";
// import { ROUTER_DIRECTIVES } from '@angular/router';
import 'jquery';
import 'semantic';
import {Hero} from '../../shared/hero';
import {HeroService} from '../../services/hero.service';

@Component({
    moduleId: module.id,
    directives: [SEMANTIC_COMPONENTS],
    // providers:[HeroService],
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html'
})

export class HeroesComponent implements OnInit{

    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService:HeroService) {
    }

    getHeroes():void{
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    ngOnInit():void{
        this.getHeroes()
    }

    onSelect(hero:Hero):void{
        console.log(hero);
        this.selectedHero = hero;
    }

    trackByFn(index,item) {
        return item.id
    }

}