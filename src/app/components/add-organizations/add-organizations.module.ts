import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOrganizationsPageRoutingModule } from './add-organizations-routing.module';

import { AddOrganizationsPage } from './add-organizations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddOrganizationsPageRoutingModule
  ],
  declarations: [AddOrganizationsPage]
})
export class AddOrganizationsPageModule {}
