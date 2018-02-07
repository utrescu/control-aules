import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GoaulaService {

  public token: string;
  logged = false;

  // host = '192.168.0.19';
  host = 'localhost';
  URL = `http://${this.host}:3000/`;

  classes: any;

  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  // LoggedIn : Determina si ha té el token
  // -----------------------------------------------------
  hasToken() {
    return this.token != null;
  }

  // Aconseguir el token d'identificació
  // -----------------------------------------------------
  login(usuari: string, contrasenya: string) {

    const body: Object = {
      'username': usuari,
      'password': contrasenya
    };

    const query = this.URL + 'login';

    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(query, body)
      .map(
      data => {
        console.log(data);
        this.token = data['token'];
        localStorage.setItem('currentUser', JSON.stringify({ username: usuari, token: this.token }));
        return data;
      })
      .catch(this.handleError);

  }

  // Eliminar l'autenticació del localstorage
  // -----------------------------------------------------
  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
    this.http.get(URL + 'logout');
  }

  //  Llista les classes disponibles
  // -----------------------------------------------------
  getClasses() {
    const query = this.URL + 'aula/list';
    let headers = new HttpHeaders();

    if (this.token != null) {
      headers = headers.set('Authorization', 'Bearer ' + this.token);
    }

    return this.http.get(query, { headers })
      .map(
      data => {
        console.log(data);
        this.classes = data;
        return data;
      })
      .catch(this.handleError);

  }

  // Aconseguir l'estat de la classe
  // -----------------------------------------------------
  getClasse(classe: string) {
    const query = this.URL + 'aula/' + classe + '/status';

    let headers = new HttpHeaders();

    if (this.token != null) {
      headers = headers.set('Authorization', 'Bearer ' + this.token);
    }

    return this.http.get(query, { headers })
      .map(
      data => {
        console.log(data);
        return data;
      })
      .catch(this.handleError);

  }

  public handleError(error: Response) {
    console.error(error);
    return Observable.throw(error['error'] || error['message'] || 'Server error');
  }

}
