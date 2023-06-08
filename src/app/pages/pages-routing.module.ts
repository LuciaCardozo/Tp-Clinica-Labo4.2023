import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from '../guard/guard.guard';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { LoginComponent } from './login/login.component';
import { PacienteComponent } from './paciente/paciente.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: BienvenidoComponent, canActivate:[GuardGuard]},
  {path: 'login', component: LoginComponent,},
  {path: 'register', component: RegisterComponent},
  {path: 'paciente', component: PacienteComponent, canActivate:[GuardGuard]},
  {path: 'especialista', component: EspecialistaComponent, canActivate:[GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
