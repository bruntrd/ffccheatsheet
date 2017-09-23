import {Component} from '@angular/core'

@Component({
    selector: 'navbar',
    template: `<div class="row">
        <nav clas="col-md-4 col-md-offset-2">
            <ul class="nav nav-pills">
                <li routerLinkActive="active"><a [routerLink]="['/options']">Options</a></li>
                <li routerLinkActive="active"><a [routerLink]="['/cheatsheet']">Sheet</a></li>
            </ul>
        </nav>
    </div>`
})

export class HeaderComponent{

}