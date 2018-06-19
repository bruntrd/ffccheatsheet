import {Http, Response, Headers} from '@angular/http';
import {EventEmitter, Injectable} from '@angular/core';
import 'rxjs/Rx';
import {SheetOptions} from './sheetoptions.model';
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()

export class CheatsheetService{

    constructor(private http: Http){}

    unrankedPlayerArray : Array<object> = [];
    sheetOptions;


    getPlayers(sheetOptions: SheetOptions){
        this.sheetOptions = sheetOptions;
        const body = JSON.stringify(sheetOptions);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('/nflapi', body, {headers: headers})
            .map((response: Response) =>{
                this.unrankedPlayerArray = response.json();
                return response.json();
            })
            .catch((error:Response)=> Observable.throw('error'));
    }

    storedPlayers(){
        return this.unrankedPlayerArray;
    }
    storedOptions(){
        return this.sheetOptions;
    }

}