import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { SabermasComponent } from './pages/sabermas/sabermas.component';

const routes:Routes = [
{
  path:'home',
  component: HomeComponent
},
{
  path:'pelicula/:id',
  component: PeliculaComponent
},
{
  path:'sabermas',
  component:SabermasComponent
},
{
  path:'**',
  redirectTo:'/home'
}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
