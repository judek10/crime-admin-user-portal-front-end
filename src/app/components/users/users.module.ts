import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';

import { UsersPageRoutingModule } from './users-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UsersPageRoutingModule,
    HttpClientModule
  ],
  declarations: [UsersComponent]
})
export class UsersPageModule {}
