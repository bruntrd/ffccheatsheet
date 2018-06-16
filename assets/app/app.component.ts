import {Component} from '@angular/core';
import {CheatsheetService} from "./cheatsheet/cheatsheet.service";
import {LoginService} from "./cheatsheet/login.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [CheatsheetService]
})

export class AppComponent {

}