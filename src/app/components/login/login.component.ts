import { Router } from '@angular/router';
import { GoaulaService } from './../../services/goaula.service';
import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { LoginForm } from '../../interfaces/loginform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  dades: LoginForm = {
    'username': '',
    'password': ''
  };

  message: string;

  constructor(private goaulaService: GoaulaService,
              private router: Router) { }

  ngOnInit() {
  }

  comprovarUsuari(forma: NgForm) {
    console.log('NgForm', forma);
    console.log(forma.value);

    const usuari =  this.dades['username'];
    const contrasenya = this.dades['password'];

    console.log(this.dades);

    this.goaulaService.login(usuari, contrasenya).subscribe(
      resultat => {
        console.log(resultat);
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err.message);
        this.message = err.message;
      }
    );

  }

}
