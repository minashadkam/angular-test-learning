import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard.component';
import { DashboardHeroComponent } from './dashboard-hero.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../model/shared.module';

const routes: Routes =  [
  { path: 'dashboard',  component: DashboardComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [ DashboardComponent, DashboardHeroComponent ]
})
export class DashboardModule { }
