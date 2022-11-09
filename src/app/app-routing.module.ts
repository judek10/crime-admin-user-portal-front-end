import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'god-mode-page',
    loadChildren: () => import('./components/god-mode-page/god-mode-page.module').then( m => m.GodModePagePageModule)
  },
  {
    path: 'add-organizations',
    loadChildren: () => import('./components/add-organizations/add-organizations.module').then( m => m.AddOrganizationsPageModule)
  },
  {
    path: 'user-manager',
    loadChildren: () => import('./components/users/users.module').then( m => m.UsersPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
