import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/view/home/home.component';
import { ServicesComponent } from './view/services/services.component';
import { AboutComponent } from './view/about/about.component';
import { BlogComponent } from './view/blog/blog.component';

const routes: Routes = [
  {
    path: '5280Free',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/5280Free',
    pathMatch: 'full'
  },
  {
    path: 'Services',
    component: ServicesComponent

  },
  {
    path: 'order',
    component: HomeComponent
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
