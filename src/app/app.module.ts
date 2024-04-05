import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { ContactsDashboardComponent } from 'src/components/contacts-dashboard/contacts-dashboard.component';
import { ContactCardComponent } from 'src/components/contact-card/contact-card.component';
import { FilterInputComponent } from 'src/components/filter-input/filter-input.component';
import { ContactsService } from 'src/services/contacts.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactsDashboardComponent,
    ContactCardComponent,
    FilterInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ContactsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
