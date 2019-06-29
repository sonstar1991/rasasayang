import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
