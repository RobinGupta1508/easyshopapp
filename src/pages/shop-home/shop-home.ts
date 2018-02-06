import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ItemsListPage } from '../items-list/items-list';
import { SharedDataService } from '../../app/DataShared.service';
import { NotificationPage } from '../notification/notification';

@Component({
  selector: 'page-shop-home',
  templateUrl: 'shop-home.html',
})
export class ShopHomePage implements OnInit {
	categoryArray = [];
  checkoutData = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private sharedDataService:SharedDataService, private popoverController: PopoverController) {
  }

  ionViewWillEnter(){
    //this.checkoutData = this.sharedDataService.checkoutArray;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopHomePage');
  }

  ngOnInit(){
  	this.http.get('https://eazyshopapi.herokuapp.com/category').subscribe(data=>{
  		console.log("category data", data.json());
  		var categoryData = data.json();
  		
  		this.categoryArray = categoryData;
  	});

    this.getUserProfile();
    this.getUserOrderDetail();
  }

  getUserProfile(){

  };


  getUserOrderDetail(){
    this.sharedDataService.setData("wallet", 50);
  }


  onCategoryClick(selectedCategory){
    console.log(selectedCategory);
    this.sharedDataService.setData('selectedCategory', {'id':selectedCategory.categoryId, 'name': selectedCategory.categoryName});
    this.navCtrl.push(ItemsListPage);
  }

  OnNotificationClick(ev){
    this.popoverController.create(NotificationPage).present({ev: ev});
  }



}
