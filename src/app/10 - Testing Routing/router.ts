import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';


@Component({
  template: `Search`
})
export class SearchComponent {
}

const searchRoute = [{path: '', component: SearchComponent}];

@NgModule({
  imports: [RouterModule.forChild(searchRoute)],
})
export class SearchModule{}

@Component({
  template: `Home`
})
export class HomeComponent {
}


export const AppRoute: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search', loadChildren: () => SearchModule},
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(AppRoute)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
