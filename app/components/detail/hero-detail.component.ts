/**
 * Created by phathuy on 8/27/16.
 */
import {Component,Input} from '@angular/core';
import {Hero} from '../../shared/hero';

@Component({
    moduleId: module.id,
    selector:'my-hero-detail',
    templateUrl:'./hero-detail.component.html'
})

export class HeroDetailComponent{
    @Input()
    hero:Hero;
}