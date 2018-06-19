import {Component, OnInit} from '@angular/core';
import {CheatsheetService} from "./cheatsheet.service";
import {SheetOptions} from "./sheetoptions.model";
import {Player} from "./player.model";

@Component ({
    selector: 'cheatsheet',
    templateUrl: 'cheatsheet.component.html',
    styleUrls: ['cheatsheet.component.css']
})

export class CheatsheetComponent implements OnInit{
    originalPlayerList: Array<object> = [];
    rankedPlayerList: Array<object> = [];
    defaultOptions = new SheetOptions('Standard',100,'Editors');
    p: number = 1;
    p2: number = 1;


    constructor(private cheatsheetService : CheatsheetService){};

    createEmptyPlayerList(listLength){
        console.log(listLength)
        for(var i = 0;i<listLength;i++){
           var tempPlayer = new Player(i,{});
           this.rankedPlayerList.push(tempPlayer);
        }
        console.log(this.rankedPlayerList);
    }
    ngOnInit(){
        this.originalPlayerList= this.cheatsheetService.storedPlayers();
        if(this.originalPlayerList.length <1){
            this.cheatsheetService.getPlayers(this.defaultOptions)
                .subscribe(
                    data=>this.originalPlayerList = data.players,
                    error=>console.error(error),
                    ()=> this.createEmptyPlayerList(this.originalPlayerList.length)

                )
        }
    }


}