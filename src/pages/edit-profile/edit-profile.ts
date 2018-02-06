import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ShopHomePage } from '../shop-home/shop-home';
import { Http } from '@angular/http';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  profileData={firstName : "", lastName : "", email:"", address:"", dob: "", gender:"", profilePicUrl: ""};
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  skipProfile(){
  	this.navCtrl.push(ShopHomePage);
  }

  saveProfile(){
    console.log(this.profileData);
    this.profileData['name'] = this.profileData.firstName + this.profileData.lastName;
    let userId = localStorage.getItem('userId');
    this.http.post('https://eazyshopapi.herokuapp.com/profile/' + userId, this.profileData).subscribe((data: any)=>{
      this.navCtrl.push(ShopHomePage);
    })
  }



}
