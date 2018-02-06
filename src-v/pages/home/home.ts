import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { AboutMePage } from '../about-me/about-me';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	registerCredentials = { username: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  public login() {
  	//alert('login');
        //this.navCtrl.setRoot('AboutMePage');
        this.navCtrl.push(AboutMePage);
  }

}
