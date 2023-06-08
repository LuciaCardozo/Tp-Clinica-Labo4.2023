import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PacienteComponent } from './paciente/paciente.component';
import { EspecialistaComponent } from './especialista/especialista.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { HighlightDirective } from '../directives/highlight.directive';


@NgModule({
  declarations: [
    BienvenidoComponent,
    LoginComponent,
    RegisterComponent,
    PacienteComponent,
    EspecialistaComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
