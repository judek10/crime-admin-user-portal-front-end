import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOrganizationsPageRoutingModule } from './add-organizations-routing.module';

import { OrganizationComponent } from './organization.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddOrganizationsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [OrganizationComponent]
})
export class AddOrganizationsPageModule {}
