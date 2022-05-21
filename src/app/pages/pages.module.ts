import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { MaterialModule } from '../material/material.module';
import { SabermasComponent } from './sabermas/sabermas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from '../pipes/reverse.pipe';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    SabermasComponent,
    ReversePipe

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PagesModule { }
