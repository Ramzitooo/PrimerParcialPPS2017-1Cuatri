import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

/*
  Generated class for the Datos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Datos {

  constructor(public http: Http) 
  {
    console.log('Hello Datos Provider');
  }
  TraerDatos() {
    return this.http.get('http://www.osmar.hol.es/index.php/usuarios')
    .toPromise()
    .then(this.extractData)
    .catch(this.error);
   /** return this.http.get('http://www.osmar.hol.es/index.php/usuarios')
      .map(response => response.json());*/
  }

  private extractData(res: Response)
  {
      return res.json();
  }

  private error(error: Response)
  {
      return error;
  }

    Agregar(obj)
    {
     
    return this.http.get('http://www.osmar.hol.es/index2.php/agregar/'+JSON.stringify(obj))
    .toPromise()
    .then(this.extractData)
    .catch(this.error);
  }

}
