import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';

@Component({
  selector: 'page-delivery-address',
  templateUrl: 'delivery-address.html',
})
export class DeliveryAddressPage {
deliveryAddress = {lat:0, lng:0, fullAddress: ""};
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation,
  		private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryAddressPage');
  }

  ionViewWillEnter(){
  	this.onLocateMe();
  }

  onLocateMe(){
    this.geolocation.getCurrentPosition()
      .then((res)=>{
      	console.log(res);
      	this.deliveryAddress.lat = res.coords.latitude;
      	this.deliveryAddress.lng = res.coords.longitude;

      	var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + res.coords.latitude + "," + this.deliveryAddress.lng + "&key=AIzaSyCcc7ZyRGjRbAuDgsLSQGdTuFxvLW9FGiI";
      	this.http.get(url).subscribe(data=>{
      		console.log("address",data.json().results[0])
      	this.deliveryAddress.fullAddress = 	data.json().results[0].formatted_address;
      	})
      		
        }).catch(err=>console.log(err));
  }

}
