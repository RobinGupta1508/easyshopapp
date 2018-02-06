import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindUsersPage } from './find-users';

@NgModule({
  declarations: [
    FindUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(FindUsersPage),
  ],
  exports: [
    FindUsersPage
  ]
})
export class FindUsersPageModule {}
