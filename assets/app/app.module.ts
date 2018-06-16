import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./nav.component";
import {CheatsheetComponent} from "./cheatsheet/cheatsheet.component";
import {OptionsComponent} from "./cheatsheet/options.component";
import {LoginComponent} from './cheatsheet/login.component';
import {LoginService} from './cheatsheet/login.service';
import {SigninComponent} from "./cheatsheet/signin.component";
import {SignupComponent} from "./cheatsheet/signup.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheatsheetService} from "./cheatsheet/cheatsheet.service";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CheatsheetComponent,
        OptionsComponent,
        LoginComponent,
        SigninComponent,
        SignupComponent

    ],
    providers:[CheatsheetService,LoginService],
    imports: [BrowserModule, routing, FormsModule,ReactiveFormsModule,HttpModule],
    bootstrap: [AppComponent]
})

export class AppModule{

}