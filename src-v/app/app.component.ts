import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutMePage } from '../pages/about-me/about-me';
import { ChangeProfilePage } from '../pages/change-profile/change-profile';
import { ConnectedUsersPage } from '../pages/connected-users/connected-users';
import { FindUsersPage } from '../pages/find-users/find-users';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(  public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();
    // });
    this.initializeApp();
    this.pages = [
      { title: 'About me', component: AboutMePage },
      { title: 'Change Profile', component: ChangeProfilePage },
      { title: 'Connected Users', component: ConnectedUsersPage },
      { title: 'Find Users', component: FindUsersPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  settingButton() {
    alert("setting")
  }

  logout() {
    alert("logout")
  }
}

