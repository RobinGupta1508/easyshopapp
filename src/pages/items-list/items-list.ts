import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Http } from '@angular/http';

import { SharedDataService } from '../../app/DataShared.service';

@Component({
  selector: 'page-items-list',
  templateUrl: 'items-list.html',
})
export class ItemsListPage implements OnInit {
  categoryObject = {'id':"", name:""};
  itemsArray= [];
  searchItem = "";
  subCategoryList = [];
  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any = 0;
  cartData = [];
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private sharedDataService: SharedDataService) {
  }

  ngOnInit(){
    
  }
   
  ionViewWillEnter(){
    this.categoryObject = this.sharedDataService.getData('selectedCategory');
    this.http.get('https://eazyshopapi.herokuapp.com/subcategoryByCat/'+ this.categoryObject.id)
      .subscribe(data=>{
        this.subCategoryList = data.json();
        if(this.subCategoryList && this.subCategoryList.length>0){
          for(var i=0; i<this.subCategoryList.length; i++){
            //this.tabData.push([]);
          }
          this.getItemsBySubCat(this.categoryObject.id, this.subCategoryList[0].subCatId)  
        }
        
      })
  }

  getItemsBySubCat(catId, subCatId){
    this.cartData = this.sharedDataService.getCartData();
    //if(this.tabData[this.tabs].length == 0){
      this.http.get('https://eazyshopapi.herokuapp.com/itemsByCat/'+catId +'/' +subCatId)
      .subscribe(data=>{
        this.itemsArray = data.json();
        for(var i=0; i<this.itemsArray.length; i++){
          for(var j=0; j< this.cartData.length; j++){
            if(this.itemsArray[i].itemId == this.cartData[j].itemId){
              this.itemsArray[i].selectedQuantity  = this.cartData[j].quantity;
            }
          }
        }
       // this.tabData[this.tabs] = this.itemsArray;
      })
   // }
    
  }


  selectTab(index) {
    this.pageSlider.slideTo(index);
    var tab = parseInt(this.tabs);
    var subCategoryId = this.subCategoryList[tab].subCatId;
    this.getItemsBySubCat(this.categoryObject.id, subCategoryId);
   }

   changeWillSlide($event) {
      this.tabs = $event._snapIndex.toString();
      var tab = parseInt(this.tabs);
      var subCategoryId = this.subCategoryList[tab].subCatId;
      this.getItemsBySubCat(this.categoryObject.id, subCategoryId);
    }

  
  // onCheckout(){
  //   if(this.checkOutArray.length>0){
  //     this.navCtrl.push(CartPage);
  //   }
  // }

  // convertIntoArray(object){
  //   var itemsKeyArray = Object.keys(object);
  //   var itemsDataLength = itemsKeyArray.length;
  //     var inputObject = {};
  //   if(object){
  //      for(var i=0; i< itemsDataLength; i++){
  //       inputObject = {};
  //       inputObject = object[itemsKeyArray[i]];
  //       inputObject['key'] = itemsKeyArray[i];
  //       inputObject['selectedQuantity'] = 0;
  //       this.itemsArray.push(inputObject);
  //       this.itemsArrayCopy = this.itemsArray;
  //     }
  //   }
  // }

  addToCart(item){
    if(item['selectedQuantity'] !== undefined){
      item['selectedQuantity']++;
    } else{
      item['selectedQuantity'] = 1;
    }
    this.sharedDataService.setCartData({itemId: item.itemId, name: item.itemName, price: item.itemPrice}, true);
  }

  removeFromCart(item){
    item.selectedQuantity --;
    this.sharedDataService.setCartData({itemId: item.itemId, name: item.itemName,price: item.itemPrice}, false);
  }

  // OnSearchData(ev){
  //   if(this.searchItem.trim() == "" ){
  //     this.itemsArray = this.itemsArrayCopy;
  //     return;
  //   }
  //   this.itemsArray = this.itemsArray.filter((v) => {

  //   if (v.name.toLowerCase().indexOf(this.searchItem.toLowerCase()) > -1) {
  //      return true;
  //     }

  //     return false;
  //   })
  // }

}
