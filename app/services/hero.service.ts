/**
 * Created by phathuy on 8/28/16.
 */
import {Injectable} from '@angular/core';
import {Hero} from '../shared/hero';
import {HEROES} from '../data/mock-heroes';

@Injectable()
export class HeroService{
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly():Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve,2000))
            .then(() => this.getHeroes());
    }
}