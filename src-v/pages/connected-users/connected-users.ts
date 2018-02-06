import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { AboutMePage } from '../about-me/about-me';

/**
 * Generated class for the ConnectedUsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-connected-users',
  templateUrl: 'connected-users.html',
})
export class ConnectedUsersPage {
	items = [{
		image: 'assets/first.jpg',
		title: 'First'
	},
	{
		image: 'assets/second.jpg',
		title: 'second'
	},
	{
		image: 'assets/third.jpg',
		title: 'Third'
	},
	{
		image: 'assets/fourth.jpg',
		title: 'Fourth'
	},
	{
		image: 'assets/fifth.jpg',
		title: 'Fifth'
	}];

	@ViewChild('mySlider') slider: Slides;
	selectedSegment: string;
  slides: any;
  showSwipeFlag = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectedUsersPage');
  }*/

  showSwipe() {
  	this.showSwipeFlag = !this.showSwipeFlag;
  }

 

  onSlideChanged(slider) {
	    console.log('Slide changed');
	    const currentSlide = this.slides[slider.activeIndex];
	    this.selectedSegment = currentSlide.id;
  }

  redirectToAnother() {
  	this.navCtrl.push(AboutMePage)
  }

}
