import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {LOCALE_ID} from '@angular/core';

import { AppComponent } from './app.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { ShowDateComponent } from './show-date/show-date.component';
import { ManageInterestListComponent } from './manage-interest-list/manage-interest-list.component';
import { AddInterestComponent } from './add-interest/add-interest.component';
import { EditInterestComponent } from './edit-interest/edit-interest.component';
import { DeleteInterestComponent } from './delete-interest/delete-interest.component';
import { PolishDatePipe } from './polish-date.pipe';
// import localePL from '@angular/common/locales/pl';
// import {registerLocaleData} from "@angular/common";

// registerLocaleData(localePL);
//zamiast tych 3 linijek
import '@angular/common/locales/global/pl';

@NgModule({
  declarations: [
    AppComponent,
    BusinessCardComponent,
    ShowDateComponent,
    ManageInterestListComponent,
    AddInterestComponent,
    EditInterestComponent,
    DeleteInterestComponent,
    PolishDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
