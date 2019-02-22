import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Routes
import {HomeComponent} from './home/home.component'
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'countries/:country', component: CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
