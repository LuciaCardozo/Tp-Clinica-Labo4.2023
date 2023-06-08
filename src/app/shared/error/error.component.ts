import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataBaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
    constructor(private route: Router) {}

    volverAlLogin() {
      this.route.navigate(["/bienvenido/login"]);
    }
}
