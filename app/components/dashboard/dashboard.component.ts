/**
 * Created by phathuy on 8/28/16.
 */
import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeroService} from '../../services/hero.service';
import {Hero} from '../../shared/hero';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private heroService:HeroService,
        private router:Router){}

    ngOnInit():void{
        this.heroService.getHeroes().then(heroes=>this.heroes = heroes.slice(1,5));
    }

    gotoDetail(hero:Hero):void{
        let link = ['/heroDetail',hero.id];
        this.router.navigate(link);
    }
}