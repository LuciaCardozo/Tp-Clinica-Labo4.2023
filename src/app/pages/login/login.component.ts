import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { DataBaseService } from 'src/app/services/database/database.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:Client = new Client;
  listaDeCorreos: any = [];
  usuario = {
    email: '',
    password: ''
  };
  loading: boolean = false;

  constructor(private database: DataBaseService,
    private router: Router,
    private toastService: ToastService) { }

  async ngOnInit() {
    const res = await this.database.traerTodo('users');
    res?.subscribe((listaref: any) => {
      this.listaDeCorreos = listaref.map((userRef: any) => userRef.payload.doc.data());
    });
  }


  loginWithValidation() {
    this.loading = true;
    let existe=this.listaDeCorreos.find((email: any) => email.email == this.user.email && email.password == this.user.password);
    console.log(existe)
    if (existe) {
      try{
          this.database.onLogin(this.user.email, this.user.password).then(()=>{
          this.database.emailUsuarioLogeado = this.user.email;
          setTimeout(() => {        
            this.database.roleUser = existe.role;
            this.loading = false;
            this.router.navigate(['/bienvenido']);
          }, 3000);
          this.toastService.show("Successfully user", {classname:'bg-success', "delay":"2000"});
        });
      }catch(error){
        this.loading = false;
        this.toastService.show("Error login", {classname:'bg-warning', "delay":"2000"});
      }
    }else if(this.user.email == '' || this.user.password==''){
      this.loading = false;
      this.toastService.show("Por favor complete todos los campos", {classname:'bg-warning', "delay":"2000"});
    }else{
      this.loading = false;
      this.toastService.show("El usuario no existe", {classname:'bg-danger',"delay":"2000"});
    }
  }

 
  
  userAutocomplete(email:string,password:string) {
    this.user.email = email;
    this.user.password = password
  }

}
