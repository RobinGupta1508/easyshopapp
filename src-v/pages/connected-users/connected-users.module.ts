import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectedUsersPage } from './connected-users';

@NgModule({
  declarations: [
    ConnectedUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectedUsersPage),
  ],
  exports: [
    ConnectedUsersPage
  ]
})
export class ConnectedUsersPageModule {}
