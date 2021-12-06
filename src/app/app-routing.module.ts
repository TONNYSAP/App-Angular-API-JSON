import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { MainComponent } from './pages/main/main.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'registration', component: RegistrationComponent
  },
  {
    path: 'catalog', component: CatalogComponent
  },
  {
    path: 'aboutus', component: AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
