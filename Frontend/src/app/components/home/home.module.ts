import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from '../../material.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AddTripComponent } from '../add-trip/add-trip.component';
import { ProducerListComponent } from './producers/producer-list/producer-list.component';
import { AddProducerComponent } from './producers/add-producer/add-producer.component';
import { DriversListComponent } from '../drivers-list/drivers-list.component';
import { AddDriverComponent } from '../add-driver/add-driver.component';



@NgModule({
  declarations: [
    HomeComponent, 
    AddUserComponent, 
    UserListComponent,
    UsersComponent, 
    AddUserComponent,
    AddTripComponent,
    DriversListComponent,
    AddUserComponent, 
    ProducerListComponent, 
    AddProducerComponent,
    UsersComponent, 
    AddUserComponent,
    DriversListComponent,
    AddDriverComponent
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
    AddTripComponent,
    AddDriverComponent,
    AddProducerComponent
  ],
})
export class HomeModule { }
