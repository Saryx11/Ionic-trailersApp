import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { TrailersPage } from '../pages/trailers/trailers';
import { LoginPage } from '../pages/login/login';
import { PreferencesPage } from '../pages/preferences/preferences';
import { TrailerPage } from '../pages/trailer/trailer';
import { FavorisPage } from '../pages/favoris/favoris';
import { NetworkProvider } from '../providers/network/network';
import { ApiServProvider } from '../providers/api-serv/api-serv';
import { MovieServProvider } from '../providers/movie-serv/movie-serv';
import {FormsModule} from "@angular/forms";
import { LoginServProvider } from '../providers/login-serv/login-serv';

@NgModule({
  declarations: [
    MyApp,
    TrailersPage,
    LoginPage,
    PreferencesPage,
    TrailerPage,
    FavorisPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrailersPage,
    LoginPage,
    PreferencesPage,
    TrailerPage,
    FavorisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkProvider,
    ApiServProvider,
    MovieServProvider,
    NetworkProvider,
    LoginServProvider
  ]
})
export class AppModule {}
