import {RouterModule, Routes} from '@angular/router';
import {OptionsComponent} from './cheatsheet/options.component';
import {CheatsheetComponent} from './cheatsheet/cheatsheet.component';
import {LoginComponent} from './cheatsheet/login.component';
import {AUTH_ROUTES} from "./cheatsheet/login.routes";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent, children:AUTH_ROUTES},
    { path: 'options', component: OptionsComponent },
    { path: 'cheatsheet', component: CheatsheetComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);