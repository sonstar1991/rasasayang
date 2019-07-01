import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
    path:'',component:MainComponent
  },
  {
    path:'main',component:MainComponent
  },
  {
    path: 'about', component:AboutComponent
  },
  {
    path: 'menu', component:MenuComponent
  },
  {
    path: 'location', component:LocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
