import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GodModePagePageRoutingModule } from './god-mode-page-routing.module';

import { GodModePagePage } from './god-mode-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GodModePagePageRoutingModule
  ],
  declarations: [GodModePagePage]
})
export class GodModePagePageModule {}
