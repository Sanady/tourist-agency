import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorExists = false;
  errorText = "";
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  repeatPassword = new FormControl('', [Validators.required]);

  constructor() { 

  }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm) {
    // if(!this.userService.getUser(this.email.value)) {
    //   this.errorExists = false;
    //   var newUser = this.userService.registerUser(this.email.value,
    //                                               this.password.value,
    //                                               this.repeatPassword.value);
    //   this.router.navigate(['']);
    // } else {
    //   this.errorExists = true;
    //   this.errorText = "User with this email already exists."
    // }
    console.log(this.email.value);
    console.log(this.password.value);
    console.log(this.repeatPassword.value);
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  getRepeatPasswordErrorMessage() {
    return this.repeatPassword.hasError('required') ? 'You must enter a value' : '';
  }
}
