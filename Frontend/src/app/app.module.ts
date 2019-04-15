import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AddTruckComponent } from './components/add-truck/add-truck.component';
import { ResizeService } from './services/resize.service';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { CreateUserViewComponent } from './components/create-user-view/create-user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginViewComponent,
    CreateUserViewComponent,
    AddTruckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ResizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
