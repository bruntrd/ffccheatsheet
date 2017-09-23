import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CheatsheetService} from './cheatsheet.service';


import {SheetOptions} from './sheetoptions.model';

@Component({
    selector: 'optionsComponent',
    templateUrl: '/options.component.html',

})

export class OptionsComponent implements OnInit{
    returnPlayerArray: Array<objetc> =
    sheetOptions=  new SheetOptions('Standard',100,'Editors','2017');
    leagueTypes: Array<string> = ['PPR','Standard'];
    players: Array<number> = ['25','50','75','100','150','200'];
    rankings: Array<string> = ['Editors','User Drafts'];
    seasons: Array<string> = ['2017','2016','2015','2014'];
    constructor(private cheatsheetService: CheatsheetService){};



    onSubmit(form: NgForm){
        const sheetOptions = new SheetOptions(form.value.type,form.value.player,form.value.rankings,form.value.season);
        console.log(sheetOptions);
        this.cheatsheetService.getPlayers(sheetOptions)
            .subscribe(
                data=>console.log(data),
                error=>console.error(error)
            )
    }

    ngOnInit(){
        console.log(this.leagueTypes);
        console.log(this.players);
    }

}