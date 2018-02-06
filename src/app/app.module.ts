import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { Ionic2RatingModule } from 'ionic2-rating';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ShopHomePage } from '../pages/shop-home/shop-home';
import { ItemsListPage } from '../pages/items-list/items-list';
import { CartPage } from '../pages/cart/cart';
import { ConfirmOrderPage } from '../pages/confirm-order/confirm-order';
import { DeliveryAddressPage } from '../pages/delivery-address/delivery-address';
import { SharedDataService } from './DataShared.service';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { MyOrdersPage } from '../pages/my-orders/my-orders';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { RateUsPage } from '../pages/rate-us/rate-us';
import { RegistrationPage } from '../pages/registration/registration';
import { NotificationPage } from '../pages/notification/notification';
import { FooterCartPage } from '../pages/footer-cart/footer-cart';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ShopHomePage,
    ItemsListPage,
    CartPage,
    ConfirmOrderPage,
    DeliveryAddressPage,
    UserProfilePage,
    MyOrdersPage,
    ContactUsPage,
    RateUsPage,
    RegistrationPage,
    NotificationPage,
    FooterCartPage,
    EditProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCcc7ZyRGjRbAuDgsLSQGdTuFxvLW9FGiI'
    }),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ShopHomePage,
    ItemsListPage,
    CartPage,
    ConfirmOrderPage,
    DeliveryAddressPage,
    UserProfilePage,
    MyOrdersPage,
    ContactUsPage,
    RateUsPage,
    RegistrationPage,
    NotificationPage,
    EditProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SharedDataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation
  ]
})
export class AppModule {}
