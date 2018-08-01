import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoggedoutComponent } from './loggedout/loggedout.component';
import { LoggedinComponent } from './loggedin/loggedin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoggedoutComponent,
    LoggedinComponent
  ],
  imports: [
    BrowserModule,
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
