import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Router } from './router';
import { AppComponent } from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {
  AccordionModule,
  AutoCompleteModule,
  DropdownModule,
  InputTextModule,
  MultiSelectModule,
  PaginatorModule
} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './shared/footer/footer.component';
import {NewStationComponent} from './new-station/new-station.component';
import {HttpClientModule} from '@angular/common/http';
import {StationsComponent} from './stations/stations.component';
import {FaqsComponent} from './faqs/faqs.component';
import {TableModule} from 'primeng/table';
import {StationPlayerService} from './shared/station-player.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StationsComponent,
    FaqsComponent,
    FooterComponent,
    NewStationComponent
  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PaginatorModule,
    MultiSelectModule,
    TableModule,
    InputTextModule,
    HttpClientModule,
    DropdownModule,
    Router
  ],
  providers: [StationPlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }