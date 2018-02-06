import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';
//import { LoginPage } from '../pages/login/login';
import { ShopHomePage } from '../pages/shop-home/shop-home';
import { CartPage } from '../pages/cart/cart';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { MyOrdersPage } from '../pages/my-orders/my-orders';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { RateUsPage } from '../pages/rate-us/rate-us';
import { RegistrationPage } from '../pages/registration/registration';
import { Http } from '@angular/http';
//import * as firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{


  userInfo;

  rootPage:any;
  @ViewChild('content') nav: NavController;
  constructor(private http : Http, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen/*, private navCtrl: NavController*/) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit(){

    const userId = JSON.parse(localStorage.getItem('userId'));
    if(userId){
      this.getUserInfo(userId);
      this.rootPage = ShopHomePage;
    } else{
      this.rootPage = RegistrationPage;  
    }


    
    // firebase.initializeApp({
    //   apiKey: "AIzaSyCZEcgjKkgKKvv26-dFjRnadUF0PirQ-80",
    //   authDomain: "authentication-e11e7.firebaseapp.com",
    //   databaseURL: "https://authentication-e11e7.firebaseio.com",
    //   projectId: "authentication-e11e7",
    //   storageBucket: "authentication-e11e7.appspot.com",
    //   messagingSenderId: "647937281865"
    // })
  }


  getUserInfo(userId){
    this.http.get('https://eazyshopapi.herokuapp.com/profile/' + userId).subscribe(data=>{
      const userData = data.json().data;
      this.userInfo = userData[0];
    });
  }

  homeClick(){
    this.nav.push(ShopHomePage);
  }

  onCartClick(){
    this.nav.push(CartPage);
  }

  onProfileClick(){
    this.nav.push(UserProfilePage);
  }

  onMyOrderClick() {
    this.nav.push(MyOrdersPage);
  }

  onContactUsClick() {
    this.nav.push(ContactUsPage); 
  }

  onRateUsClick(){
    this.nav.push(RateUsPage); 
  }

  onSignOut(){
    this.nav.push(RegistrationPage);
  }
}

