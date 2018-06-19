import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CheatsheetService} from './cheatsheet.service';


import {SheetOptions} from './sheetoptions.model';
import {Router} from "@angular/router";

@Component({
    selector: 'optionsComponent',
    templateUrl: '/options.component.html',

})

export class OptionsComponent implements OnInit{
    returnPlayerArray: Array<object> = [];
    sheetOptions=  new SheetOptions('Standard',100,'Editors');
    leagueTypes: Array<string> = ['PPR','Standard'];
    players: Array<string> = ['25','50','75','100','150','200'];
    rankings: Array<string> = ['Editors','User Drafts'];
    constructor(private cheatsheetService: CheatsheetService, private router : Router){};



    onSubmit(form: NgForm){
        const sheetOptions = new SheetOptions(form.value.type,form.value.player,form.value.rankings);
        this.cheatsheetService.getPlayers(sheetOptions)
            .subscribe(
                data=>console.log(data),
                error=>console.error(error),
                ()=> this.router.navigateByUrl('/cheatsheet')

            );
        console.log('heyo');
    }

    ngOnInit(){

    }

}