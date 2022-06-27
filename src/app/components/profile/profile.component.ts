import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  firstname = new FormControl('', [Validators.required, Validators.min(4), Validators.max(64)]);
  lastname = new FormControl('', [Validators.required, Validators.min(4), Validators.max(64)]);
  phoneNumber = new FormControl('', [Validators.required, Validators.min(8), Validators.max(9)]);
  password = new FormControl('', [Validators.required, Validators.min(8), Validators.max(32)]);
  confirmPassword = new FormControl('', [Validators.required]);
  username = `Ivan Rener`;

  constructor() { }

  ngOnInit(): void {
  }

  getFirstNameErrorMessage() {
    if (this.firstname.hasError('required')) {
      return 'You must enter a value';
    }
    return this.firstname.hasError('firstname') ? 'Not a valid input' : '';
  }

  getLastNameErrorMessage() {
    if (this.lastname.hasError('required')) {
      return 'You must enter a value';
    }
    return this.lastname.hasError('lastname') ? 'Not a valid input' : '';
  }

  getPhoneNumberErrorMessage() {
    if (this.phoneNumber.hasError('required')) {
      return 'You must enter a value';
    }
    return this.phoneNumber.hasError('phoneNumber') ? 'Not a valid input' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('password') ? 'Not a valid input' : '';
  }

  getConfirmPasswordErrorMessage() {
    if (this.confirmPassword.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.confirmPassword.value != this.password.value) {
      return 'Confirm password and password are not same';
    }

    return this.confirmPassword.hasError('confirmPassword') ? 'Not a valid input' : '';
  }
}
