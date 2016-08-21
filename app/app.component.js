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
var angular2_materialize_1 = require("angular2-materialize");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.hero = 'Windstorm';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [angular2_materialize_1.MaterializeDirective],
            template: "\n        <ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"accordion\">\n          <li>\n            <div class=\"collapsible-header\"><i class=\"material-icons\">filter_drama</i>First</div>\n            <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\n          </li>\n          <li>\n            <div class=\"collapsible-header\"><i class=\"material-icons\">place</i>Second</div>\n            <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\n          </li>\n          <li>\n            <div class=\"collapsible-header\"><i class=\"material-icons\">whatshot</i>Third</div>\n            <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\n          </li>\n        </ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map