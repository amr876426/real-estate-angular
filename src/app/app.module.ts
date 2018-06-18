import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component'; 
import { RouterModule } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing ,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
