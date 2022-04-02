import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import {FormsModule} from "@angular/forms";
import { MyDirectiveDirective } from './business-card/my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BusinessCardComponent,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
