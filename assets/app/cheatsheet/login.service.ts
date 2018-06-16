import {Http, Response, Headers} from '@angular/http';
import {EventEmitter, Injectable} from '@angular/core';
import {User} from './user.model';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()

export class LoginService{

    constructor(private http: Http){}

    signup(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('/authenticate/signup',body, {headers: headers})
            .map((response: Response)=> response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    signin(user: User){
        console.log(user);
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('/authenticate/signin',body, {headers: headers})
            .map((response: Response)=> response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') !== null
    }



}