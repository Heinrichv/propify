import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isAgent = false;
  personalForm: FormGroup;
  contactForm: FormGroup;
  loginForm: FormGroup;

  request: any = {
    isAgent: false,
    fname: '',
    lname: '',
    company: '',
    email: '',
    mobile: '',
    loginName: '',
    password: ''
  };

  constructor(
    private _formBuilder: FormBuilder,
    readonly route: Router
  ) {}

  ngOnInit() {
    this.personalForm = this._formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      company: ['']
    });
    this.contactForm = this._formBuilder.group({
      email: ['', Validators.email],
      mobile: ['', Validators.required]
    });
    this.loginForm = this._formBuilder.group({
      loginName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  agentClick() {
    this.isAgent = !this.isAgent;
  }

  submitForm() {
    this.request.fname = this.personalForm.value.fname;
    this.request.fname = this.personalForm.value.lname;
    this.request.company = this.personalForm.value.company;
    this.request.email = this.contactForm.value.email;
    this.request.mobile = this.contactForm.value.mobile;
    this.request.loginName = this.loginForm.value.loginName;
    this.request.password = this.loginForm.value.password;
    this.request.isAgent = this.isAgent;

    console.log(this.request);
  }
}
