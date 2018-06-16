import {Component} from '@angular/core'
import {Router} from "@angular/router";
import {LoginService} from "./cheatsheet/login.service";

@Component({
    selector: 'navbar',
    template: `<div class="row">
        <nav class="col-md-4">
            <ul class="nav nav-pills">
                <li *ngIf="!isLoggedIn()" routerLinkActive="active"><a [routerLink]="['/login']">Home</a></li>
                <li *ngIf="isLoggedIn()" routerLinkActive="active"><a [routerLink]="['/options']">Options</a></li>
                <li *ngIf="isLoggedIn()" routerLinkActive="active"><a [routerLink]="['/cheatsheet']">Sheet</a></li>
            </ul>
        </nav>
    </div>`
})

export class HeaderComponent{
    constructor(private loginService : LoginService, private router: Router){}

    onLogout(){
        this.loginService.logout();
        this.router.navigate(['/login', 'signin']);
    }
    isLoggedIn(){
        return this.loginService.isLoggedIn();
    }

}