import {RouterModule, Routes} from '@angular/router';
import {OptionsComponent} from './cheatsheet/options.component';
import {CheatsheetComponent} from './cheatsheet/cheatsheet.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/options', pathMatch: 'full'},
    { path: 'options', component: OptionsComponent },
    { path: 'cheatsheet', component: CheatsheetComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);