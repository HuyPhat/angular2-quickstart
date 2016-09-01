/**
 * Created by phathuy on 8/28/16.
 */
import {Injectable} from '@angular/core';
import {Headers,Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Hero} from '../shared/hero';
// import {HEROES} from '../data/mock-heroes';

@Injectable()
export class HeroService{
    private heroesUrl = 'app/heroes';
    constructor(private http: Http){}
    private handleError(error:any): Promise<any>{
        console.log(error);
        return Promise.reject(error.message || error);
    }
    getHeroes():Promise<Hero[]>{
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(res=>res.json().data as Hero[])
            .catch(this.handleError);
    }
    getHeroesSlowly():Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve,2000))
            .then(() => this.getHeroes());
    }
    getHero(id:number):Promise<Hero>{
        return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id===id));
    }
}