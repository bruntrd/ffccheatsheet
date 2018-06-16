import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {LoginService} from "./login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'authComponent',
    template: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active"><a [routerLink]="['signup']">Sign Up</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['signin']">Sign In</a></li>
                </ul>
            </nav>
        </header>
        <div class="row">
            <router-outlet></router-outlet>
        </div>`

})

export class LoginComponent implements OnInit {

    constructor(private loginService: LoginService, private router: Router) {
    }

    ngOnInit(){
        if(this.loginService.isLoggedIn()){
            this.router.navigateByUrl('/options');
        }
    }


}