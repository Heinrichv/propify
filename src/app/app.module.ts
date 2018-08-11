import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { LoggedinModule } from './loggedin/loggedin.module';
import { SharedModule } from './shared/shared.module';
import { LoggedoutModule } from './loggedout/loggedout.module';

import 'hammerjs';

// Required for routing
import { MainComponent } from './shared/main/main.component';
import { ContactComponent } from './shared/contact/contact.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HowitworksComponent } from './loggedout/howitworks/howitworks.component';
import { SignupComponent } from './loggedout/signup/signup.component';
import { LoginComponent } from './loggedout/login/login.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    LoggedoutModule,
    LoggedinModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: 'home', component: MainComponent },
      { path: 'how-it-works', component: HowitworksComponent },
      { path: 'contact-us', component: ContactComponent },
      { path: 'sign-up', component: SignupComponent },
      { path: 'buyer', component: LoginComponent },
      { path: 'agent', component: LoginComponent },
      {path: '404', component: NotFoundComponent},
      {path: '**', redirectTo: '/home'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
