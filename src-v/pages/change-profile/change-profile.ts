import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutMePage } from '../about-me/about-me';

/**
 * Generated class for the ChangeProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-change-profile',
  templateUrl: 'change-profile.html',
})
export class ChangeProfilePage {
	userForm = {
		firstName: '',
		lastName: '',
		email: '',
		city: '',
		state: 'Rajasthan',
		country: 'India',
		phoneNumber: ''
	}

	stateArray = [{
		name: 'Rajasthan',
		id: 1
	},{
		name: 'Delhi',
		id: 2
	},{
		name: 'Kolkata',
		id: 3
	}];

	countryArray = [{
		name: 'India',
		id: 1
	},{
		name: 'Australia',
		id: 2
	},{
		name: 'USA',
		id: 3
	}]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeProfilePage');
  }

  submit() {
  	this.navCtrl.push(AboutMePage)
  }

}
