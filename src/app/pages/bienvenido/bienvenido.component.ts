import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit{
  constructor(private route:Router, public database:DataBaseService) {

  }

  ngOnInit(): void {
    console.log(this.database.roleUser)
  }
  SeHizoClick(dato:string) {
    console.log(this.database.roleUser)
    if(dato == 'login') {
      this.database.roleUser = "";
    }
    console.log(this.database.roleUser)
    this.route.navigate(['/bienvenido/'+dato])
  }
}
