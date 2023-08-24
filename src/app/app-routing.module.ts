import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PlateformeComponent } from './plateforme/plateforme.component';

const routes: Routes = [

  {path:'',component:AccueilComponent, pathMatch:"full"},
  {path:'accueil',component:AccueilComponent},
  {path:'plateforme',component:PlateformeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
