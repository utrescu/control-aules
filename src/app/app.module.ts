import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// routes
import {APP_ROUTING} from './app.routes';

// services
import { GoaulaService } from './services/goaula.service';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LlistaComponent } from './components/llista/llista.component';
import { ComprovaComponent } from './components/comprova/comprova.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LlistaComponent,
    ComprovaComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    GoaulaService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
