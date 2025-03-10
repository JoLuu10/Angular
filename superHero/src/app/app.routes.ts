import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './heroes/hero/hero.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'hero', component: HeroComponent},
    { path: '**', pathMatch:'full', redirectTo:'home' }
]

export const app_routing = RouterModule.forRoot(APP_ROUTES)