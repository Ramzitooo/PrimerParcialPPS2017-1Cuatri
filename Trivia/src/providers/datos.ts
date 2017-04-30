import { Injectable } from '@angular/core';
import { Http, Headers ,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/toPromise";

/*
  Generated class for the Datos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Datos {

  constructor(public http: Http) {
    console.log('Hello Datos Provider');
  }
  TraerDatos() 
  {
      return this.http
      .get('http://localhost/trivia/trivia.php/usuarios')
      .map(response => response.json());
  }
  private extractData(res:Response)
 {
   return res.json();//devuevle siempre un json.
 }
 private error(error:Response)
 {
   return error;
 }
}
