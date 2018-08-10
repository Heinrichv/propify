import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoggedoutComponent } from './loggedout/loggedout.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { MaterialModule } from './material/material.module';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoggedoutComponent,
    LoggedinComponent,
    HowitworksComponent,
    ContactComponent,
    SignupComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: 'home', component: AppComponent },
      { path: 'how-it-works', component: HowitworksComponent },
      { path: 'contact-us', component: ContactComponent },
      { path: 'sign-up', component: SignupComponent },
      { path: 'buyer', component: LoginComponent },
      { path: 'agent', component: LoginComponent },
      {path: '404', component: NotFoundComponent},
      {path: '**', redirectTo: '/404'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
