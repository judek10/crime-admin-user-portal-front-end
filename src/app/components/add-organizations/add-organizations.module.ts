import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOrganizationsPageRoutingModule } from './add-organizations-routing.module';

import { AddOrganizationsPage } from './add-organizations.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddOrganizationsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AddOrganizationsPage]
})
export class AddOrganizationsPageModule {}
