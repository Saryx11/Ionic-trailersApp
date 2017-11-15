import {Component, ViewChild} from '@angular/core';
import {NavController, Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TrailersPage } from '../pages/trailers/trailers';
import {LoginPage} from "../pages/login/login";
import {FavorisPage} from "../pages/favoris/favoris";
import {PreferencesPage} from "../pages/preferences/preferences";
import {TrailerPage} from "../pages/trailer/trailer";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TrailersPage;
  @ViewChild(Nav) nav: Nav;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  TrailersClick(){
    this.nav.push(TrailersPage);
  }
  LoginClick(){
    this.nav.push(LoginPage);
  }
  FavorisClick(){
    this.nav.push(FavorisPage);
  }
  PreferencesClick(){
    this.nav.push(PreferencesPage);
  }
}

