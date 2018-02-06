import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShopHomePage } from '../shop-home/shop-home';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
  	this.navCtrl.push(ShopHomePage);
  }

  onCreateNew(){  
    this.navCtrl.push(RegistrationPage);
  }

}
