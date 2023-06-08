import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
   {path:"",redirectTo:"bienvenido",pathMatch:"full"},
  // {path:"login",component:LoginComponent},
  // {path:"quienSoy",component:QuienSoyComponent,canActivate:[AuthGuard]},
  // {path:"register",component:RegisterComponent},
  // {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
   {path:"bienvenido",loadChildren:() => import('./pages/pages.module').then(m => m.PagesModule)},
   {path:'**',component:ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
