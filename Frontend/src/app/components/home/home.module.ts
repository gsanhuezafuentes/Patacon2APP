import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from '../../material.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ProducerListComponent } from './producers/producer-list/producer-list.component';
import { AddProducerComponent } from './producers/add-producer/add-producer.component';
import { DriversListComponent } from '../drivers-list/drivers-list.component';


@NgModule({
  declarations: [
    HomeComponent, 
    AddUserComponent, 
    ProducerListComponent, 
    AddProducerComponent
    UsersComponent, 
    AddUserComponent,
    DriversListComponent
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
    AddProducerComponent
  ],
})
export class HomeModule { }
