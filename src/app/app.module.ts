import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './view/about/about.component';
import { BlogComponent } from './view/blog/blog.component';
import { ServicesComponent } from './view/services/services.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { TaglineComponent } from './component/tagline/tagline.component';
import { ServicesDetailComponent } from './component/services/services.component';
import { OrderMainComponent } from './component/order/order-main/order-main.component';
import { OrderModule } from './component/order/order.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TaglineComponent,
    ServicesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
