import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddOrganizationsPage } from './add-organizations.page';

const routes: Routes = [
  {
    path: '',
    component: AddOrganizationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddOrganizationsPageRoutingModule {}
