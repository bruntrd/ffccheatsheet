import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./nav.component";
import {CheatsheetComponent} from "./cheatsheet/cheatsheet.component";
import {OptionsComponent} from "./cheatsheet/options.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheatsheetService} from "./cheatsheet/cheatsheet.service";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CheatsheetComponent,
        OptionsComponent,

    ],
    providers:[CheatsheetService],
    imports: [BrowserModule, routing, FormsModule,ReactiveFormsModule,HttpModule],
    bootstrap: [AppComponent]
})

export class AppModule{

}