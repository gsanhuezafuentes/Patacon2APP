import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/core/not-found/not-found.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { TruckViewComponent } from './components/truck-view/truck-view.component';




const routes: Routes = [
  {path: 'home', loadChildren: './components/home/home.module#HomeModule'},
  {path: 'login', component: LoginViewComponent},
  {path:'truck-view', component: TruckViewComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
