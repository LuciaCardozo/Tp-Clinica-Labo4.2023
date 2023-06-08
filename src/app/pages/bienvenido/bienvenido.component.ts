import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent {
  constructor(private route:Router, private database:DataBaseService) {

  }
  SeHizoClik(dato:string) {
    console.log(this.database.roleUser)
    if(dato == 'login') {
      this.database.roleUser = "";
    }
    console.log(this.database.roleUser)
    this.route.navigate(['/bienvenido/'+dato])
  }
}
