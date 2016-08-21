/**
 * Created by phathuy on 8/21/16.
 */
import {Component} from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
    selector: 'my-app',
    directives: [MaterializeDirective],
    template: `
        <ul materialize="collapsible" class="collapsible" data-collapsible="accordion">
          <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
        </ul>`
})

export class AppComponent {
    title = 'Tour of Heroes';
    hero = 'Windstorm';
}