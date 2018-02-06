import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { ConfirmOrderPage } from '../confirm-order/confirm-order';
import { SharedDataService } from '../../app/DataShared.service';
import { DeliveryAddressPage } from '../delivery-address/delivery-address';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
   checkoutData = [];
   total = 0;
   walletMoney = 0;
   payableAmount = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sharedDataService:SharedDataService, private popoverController: PopoverController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CartPage');
  // }
  
  ionViewWillEnter(){
    this.getWalletBalance();
    this.getItemDetail();
    //this.calculatePayableAmount();
  }


  calculatePayableAmount(){
    if(this.total > 300){
      this.payableAmount = this.total - this.walletMoney;
    }else{
      this.payableAmount = this.total;
    }
  }

  getWalletBalance(){
    this.walletMoney = this.sharedDataService.getData("wallet");

  }

  getItemDetail(){
    this.total = 0;
    this.checkoutData = this.sharedDataService.getCartData();
    for(let i=0;i<this.checkoutData.length;i++){
      this.total = this.total + (this.checkoutData[i].quantity*this.checkoutData[i].price);
    }
    this.calculatePayableAmount();
  }

  onConfirmOrder(){
  	this.navCtrl.push(ConfirmOrderPage);
  }

  onConfirmDeliveryAddress(){
    this.navCtrl.push(DeliveryAddressPage);
  }

  viewCart(){
    this.popoverController.create(DeliveryAddressPage).present();
    
  }

  addToCart(item){
    if(item['selectedQuantity'] !== undefined){
      item['selectedQuantity']++;
    } else{
      item['selectedQuantity'] = 1;
    }
    this.sharedDataService.setCartData({itemId: item.itemId, name: item.itemName, price: item.itemPrice}, true);
    this.getItemDetail();

  }

  removeFromCart(item){
    item.selectedQuantity --;
    this.sharedDataService.setCartData({itemId: item.itemId, name: item.itemName,price: item.itemPrice}, false);
    this.getItemDetail();
  }
}
