import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { Http } from '@angular/http';
import { ShopHomePage } from '../shop-home/shop-home';


@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  OTP;
  showverifyOTP = false;
  firstDigit;
  secondDigit;
  thirdDigit;
  fourthDigit;
  mobileNumber;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }


  sendOTP(){
  	this.generateOTP();
  }

  generateOTP(){
  	var date = new Date();
    var time = date.getTime().toString();
    var manipulatedData = (parseInt(time)*36).toString();
    this.OTP = manipulatedData.substring(manipulatedData.length-4, manipulatedData.length);
    console.log(this.OTP, "otp");
    this.showverifyOTP = true;
    this.showToast(`One Time Password is ${this.OTP}`, 'middle');
  }

  verifyOTP(){
    var enteredOTP = this.firstDigit.toString() + this.secondDigit.toString() + this.thirdDigit.toString() + this.fourthDigit.toString();
    if(this.OTP == enteredOTP){
      this.saveUser();
    }else{
      this.showToast('Entred OTP is incorrect', 'middle')
    }
  }

  saveUser(){
    var inputData = {
      mobile : this.mobileNumber
    }
    this.http.post('https://eazyshopapi.herokuapp.com/register', inputData).subscribe((data: any)=>{
      console.log(data.json().data[0]);
      const userData = data.json();
      this.showToast('welcome to quick shop', 'bottom');
      localStorage.setItem("userId", userData.data[0].userId);

      if(userData.msg !== 'User Already Registered'){
        this.navCtrl.push(EditProfilePage);
      }else{
        this.navCtrl.push(ShopHomePage);
      }
      
    })
  }

  showToast(msg, position) {
  const toast = this.toastCtrl.create({
    message: msg,
    duration: 2000,
    position: position
  });
  toast.present();
}

}
