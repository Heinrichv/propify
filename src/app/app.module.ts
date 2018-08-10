import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoggedoutComponent } from './loggedout/loggedout.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    LoggedoutComponent,
    LoggedinComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule,
    RouterModule.forRoot([
      { path: 'home', component: AppComponent },
      { path: 'how-it-works', component: AppComponent },
      { path: 'contact-us', component: AppComponent },
      { path: 'sign-up', component: AppComponent },
      { path: '*', component: AppComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
