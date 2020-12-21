import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {BodyComponent} from "./component/body/body.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'The Solar System - Home'},
  },
  {
    path: 'body/:id',
    component: BodyComponent,
    data: {title: 'The Solar System - Body'},
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
