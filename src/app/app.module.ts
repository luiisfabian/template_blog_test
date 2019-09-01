import { MaterialModule } from './angular-material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FiltersComponent } from './filters/filters.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';

import bootstrap from 'bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    HomeComponent,
    MessageComponent,
    WishlistComponent,
    SettingsComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
