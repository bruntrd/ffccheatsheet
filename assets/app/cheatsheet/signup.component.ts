import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "./user.model";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'signup',
    template: `<div class="col-md-8 col-md-offset-2">
        <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" class="form-control" formControlName="firstName">
            </div>
            <div class="form-group">
                <label for="lastName">last Name</label>
                <input type="text" id="lastName" class="form-control" formControlName="lastName">
            </div>
            <div class="form-group">
                <label for="email">eMail</label>
                <input type="email" id="email" class="form-control" formControlName="email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" formControlName="password">
            </div>
            <!--<div class="form-group">-->
            <!--<label for="passwordCheck">Confirm Password</label>-->
            <!--<input type="password" id="passwordCheck"  class="form-control"  formControlName="passwordCheck">-->
            <!--</div>-->
            <!--<div class="passwordCheck" *ngIf="passwordMatch" style="color:red">Passwords do not match!</div>-->
            <button class="btn btn-primary" type="submit" [disabled]="!signupForm.valid">Submit</button>

        </form>
    </div>`
})

export class SignupComponent implements OnInit{
    signupForm: FormGroup;

    //can use angular 2 form builder- this is how you do it without it
    constructor(private loginService: LoginService, private router: Router){};

    onSubmit(){
        const user = new User(this.signupForm.value.firstName,this.signupForm.value.lastName,this.signupForm.value.email, this.signupForm.value.password);
        console.log('user to be signed up',user);
        this.loginService.signup(user)
            .subscribe(
                data=>{
                    console.log(data);
                    this.signupForm.reset()
                    this.router.navigateByUrl('/login/signin');
                    },
                error=> console.error(error)
            );
        }

    ngOnInit(){
        this.signupForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }

}