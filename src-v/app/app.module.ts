import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutMePage } from '../pages/about-me/about-me';
import { ChangeProfilePage } from '../pages/change-profile/change-profile';
import { ConnectedUsersPage } from '../pages/connected-users/connected-users';
import { FindUsersPage } from '../pages/find-users/find-users';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutMePage,
    ChangeProfilePage,
    ConnectedUsersPage,
    FindUsersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutMePage,
    ChangeProfilePage,
    ConnectedUsersPage,
    FindUsersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
