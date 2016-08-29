"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by phathuy on 8/21/16.
 */
var core_1 = require('@angular/core');
var ng_semantic_1 = require("ng-semantic");
// import { ROUTER_DIRECTIVES } from '@angular/router';
require('jquery');
require('semantic');
var hero_service_1 = require('../../services/hero.service');
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        console.log(hero);
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            directives: [ng_semantic_1.SEMANTIC_COMPONENTS],
            // providers:[HeroService],
            selector: 'my-heroes',
            templateUrl: 'heroes.component.html'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map