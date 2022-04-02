import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import { AppComponent } from './app.component';

import { FilterOrdersPipe } from './filter-orders.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, NgxMaterialTimepickerModule ],
  declarations: [ AppComponent,  FilterOrdersPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
