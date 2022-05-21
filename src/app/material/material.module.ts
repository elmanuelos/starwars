import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  exports: [
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  BrowserAnimationsModule

  ]
})
export class MaterialModule { }
