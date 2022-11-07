import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GodModePagePage } from './god-mode-page.page';

const routes: Routes = [
  {
    path: '',
    component: GodModePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodModePagePageRoutingModule {}
