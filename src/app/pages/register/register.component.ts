import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { stringify } from '@firebase/util';
import { DataBaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formPaciente: FormGroup;
  formEspecialista: FormGroup;
  formAdministrador: FormGroup;
  imageToUpload:any;
  imageToUpload2:any;
  paciente: boolean = true;
  especialista: boolean = false;
  administrador: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, public database: DataBaseService) { 
    this.formPaciente = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      edad: ["", Validators.required],
      dni: ["", Validators.required],
      password: ["",Validators.required],
      mail: ["", Validators.required],
      obraSocial: ["", Validators.required]
    });

    this.formEspecialista = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      edad: ["", Validators.required,],
      dni: ["", Validators.required,],
      password: ["",Validators.required,],
      mail: ["", Validators.required],
      especialidad: ["", Validators.required]
    });
    this.formAdministrador = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      edad: ["", Validators.required],
      dni: ["", Validators.required],
      password: ["",Validators.required],
      mail: ["", Validators.required],
    });
  }

  agregarDatosPaciente() {
    console.log(this.formPaciente)
    console.log(JSON.stringify(this.formPaciente.controls['dni'].value).length)
    this.formPaciente.controls['dni'].value
  }

  agregarDatosEspecialista() {
    console.log(this.formEspecialista)
  }

  agregarDatosAdministrador() {
    console.log(this.formAdministrador)
  }

  mostrarOpcion(opcion: string) {
    opcion == 'paciente' ? 
    (this.paciente = true, this.especialista = false, this.administrador = false) : 
    opcion == 'administrador' ? (this.administrador = true, this.especialista = false, this.paciente = false) :
    (this.administrador = false, this.especialista = true, this.paciente = false)
  }

  uploadImage(event: any, dato: string) {
    let reader = new FileReader();
    let archivoCapturado = event.target.files[0];
    reader.readAsDataURL(archivoCapturado);
    reader.onloadend = () => {
     dato == 'imageToUpload' ? this.imageToUpload = reader.result : this.imageToUpload2 = reader.result;
    }
  }
}
