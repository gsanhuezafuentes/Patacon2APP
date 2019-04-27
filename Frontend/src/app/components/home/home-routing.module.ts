import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProducerListComponent } from './producers/producer-list/producer-list.component';
import { DriversListComponent } from '../drivers-list/drivers-list.component';




const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children:[
     {path: 'usuarios',component: UsersComponent},
     {path: 'productores', component: ProducerListComponent}
     {path: 'choferes',component: DriversListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
