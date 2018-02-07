import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LlistaComponent } from './components/llista/llista.component';
import { ComprovaComponent } from './components/comprova/comprova.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aules', component: LlistaComponent },
  { path: 'aules/:id', component: ComprovaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'exit', component: LogoutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
