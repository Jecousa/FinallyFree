import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/view/home/home.component';
import { ServicesComponent } from './view/services/services.component';
import { AboutComponent } from './view/about/about.component';
import { BlogComponent } from './view/blog/blog.component';
import { OrderMainComponent } from './component/order/order-main/order-main.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: 'Services',
    component: ServicesComponent

  },
  {
    path: 'order',
    component: OrderMainComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Blog',
    component: BlogComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
