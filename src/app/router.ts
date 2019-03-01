import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NewStationComponent} from './new-station/new-station.component';
import {StationsComponent} from './stations/stations.component';
import {FaqsComponent} from './faqs/faqs.component';

const routes: Routes = [
  {path: 'stations/new', component: NewStationComponent, pathMatch: 'full'},
  {path: 'stations', component: StationsComponent, pathMatch: 'full'},
  {path: 'faqs', component: FaqsComponent, pathMatch: 'full'},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Router { }
