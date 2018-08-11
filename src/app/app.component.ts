import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContactComponent } from './shared/contact/contact.component';
import { SignupComponent } from './loggedout/signup/signup.component';
import { LoginComponent } from './loggedout/login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // The current state which the browser is representing
  loggedIn = false;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    readonly dialog: MatDialog
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openLogin(snav, type) {
    snav.toggle();
    this.dialog.open(LoginComponent, {
      width: '300px',
      data: {}
    });
  }

  openSignUp() {
    this.dialog.open(SignupComponent, {
      width: '500px',
      data: {}
    });
  }

  openContactUs(snav) {
    snav.toggle();
    this.dialog.open(ContactComponent, {
      width: '500px',
      data: {}
    });
  }
}


