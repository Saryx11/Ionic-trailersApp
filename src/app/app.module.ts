import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {PreferencesPage} from "../pages/preferences/preferences";
import {TrailerPage} from "../pages/trailer/trailer";
import {FavorisPage} from "../pages/favoris/favoris";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PreferencesPage,
    TrailerPage,
    FavorisPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PreferencesPage,
    TrailerPage,
    FavorisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
