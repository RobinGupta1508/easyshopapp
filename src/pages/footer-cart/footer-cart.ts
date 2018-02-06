import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SharedDataService } from '../../app/DataShared.service';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-footer-cart',
  templateUrl: 'footer-cart.html',
})
export class FooterCartPage {
	cartData = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private SharedDataService: SharedDataService) {
  	this.cartData = this.SharedDataService.getCartData();
  	this.SharedDataService.cartUpdate.subscribe(data=>{
  		this.cartData = this.SharedDataService.getCartData();
  		console.log("footerCart",this.cartData);
  	})
  }

  ionViewDidLoad() {
  	this.cartData = this.SharedDataService.getCartData();
  }

  ionViewWillEnter(){
  	this.cartData = this.SharedDataService.getCartData();
  }

 onCheckout(){
    if(this.cartData.length>0){
      this.navCtrl.push(CartPage);
    }
  }

}
