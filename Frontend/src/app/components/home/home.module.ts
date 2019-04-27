import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from '../../material.module';
import { AddUserComponent } from './add-user/add-user.component';
import { AddTripComponent } from '../add-trip/add-trip.component';






@NgModule({
  declarations: [
    HomeComponent, 
    UsersComponent, AddUserComponent,
    AddTripComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  entryComponents: [
    AddUserComponent,
    AddTripComponent
  ],
})
export class HomeModule { }
