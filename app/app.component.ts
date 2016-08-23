/**
 * Created by phathuy on 8/21/16.
 */
import {Component} from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
    selector: 'my-app',
    directives: [MaterializeDirective],
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    title = 'Tour of Heroes';
    hero = 'Windstorm';
}