import {Http, Response, Headers} from '@angular/http';
import {EventEmitter, Injectable} from '@angular/core';
import 'rxjs/Rx';
import {SheetOptions} from './sheetoptions.model';
import {Observable} from "rxjs/Observable";

@Injectable()

export class CheatsheetService{

    constructor(private http: Http){}

    getPlayers(sheetOptions: SheetOptions){
        console.log(sheetOptions);
        const body = JSON.stringify(sheetOptions);
        const headers = new Headers({'Content-Type': 'application/json'});
        console.log(body,headers);
        return this.http.post('/nflapi', body, {headers: headers})
            .map((response: Response) =>{
                const result= response.json();
                console.log(result);
                return result;
            })
            .catch((error:Response)=> Observable.throw('error'));
    }

}