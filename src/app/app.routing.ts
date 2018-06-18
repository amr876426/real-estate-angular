
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'blog/:id',
        component: BlogComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);