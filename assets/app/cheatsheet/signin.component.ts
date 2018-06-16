import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "./user.model";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'signin',
    template: `<div class="col-md-8 col-md-offset-2">
    <form [formGroup]="signinForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
            <label for="email">eMail</label>
            <input type="email" id="email" class="form-control" formControlName="email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" formControlName="password">
        </div>
        <button class="btn btn-primary" type="submit" [disabled]="!signinForm.valid">Submit</button>
    </form>
</div>`
})

export class SigninComponent implements OnInit{
    signinForm: FormGroup;

    //can use angular 2 form builder- this is how you do it without it
    constructor(private loginService: LoginService, private router: Router){};

    onSubmit(){
        const user = new User('','',this.signinForm.value.email, this.signinForm.value.password);
        this.loginService.signin(user)
            .subscribe(
                data=>{
                    console.log(data);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/options');
                },
                error=> console.error(error)
            );

        console.log(this.signinForm);
    }

    ngOnInit(){
        this.signinForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),

        })
    }

}