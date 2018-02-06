import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-rate-us',
  templateUrl: 'rate-us.html',
})
export class RateUsPage {
	rate = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RateUsPage');
  }

  onModelChange(event){
  	console.log(event);
  }

  OnSubmit(){
  	const toast = this.toastController.create({
      message: 'Thank you for giving your precious time for us',
      showCloseButton: true,
      closeButtonText: 'Ok',
      duration: 2000
    });
    toast.present();
  }

}
