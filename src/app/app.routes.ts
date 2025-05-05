import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => HomeComponent}, // Lazy load the AppComponent for the home route)}, 
    {path: 'auth/login', loadComponent: () => LoginComponent}, // Lazy load the LoginComponent for the auth route
    {path: 'shop', loadComponent: () => ShopComponent}, // Lazy load the ShopComponent for the shop route
];
