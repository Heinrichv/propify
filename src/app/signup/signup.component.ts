import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLinear = false;
  isLoading = true;
  personalForm: FormGroup;
  contactForm: FormGroup;
  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personalForm = this._formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required]
    });
    this.contactForm = this._formBuilder.group({
      email: ['', Validators.email],
      mobile: ['', Validators.required]
    });
    this.loginForm = this._formBuilder.group({
      loginName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.isLoading = false;
  }
}
