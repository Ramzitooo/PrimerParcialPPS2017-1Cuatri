import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController} from "ionic-angular";
import { AngularFire,FirebaseListObservable } from 'angularfire2';

import { PrincipalPage } from "../principal/principal";
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  elusuario:Usuario= new Usuario();//CREO USUARIO NUEVO!

  usuarios:FirebaseListObservable<any[]>;//TRAIGO A LOS USUARIOS
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCrtl:AlertController,
              public fire: AngularFire) 
              {
                this.usuarios=fire.database.list("\Usuarios");
                this.Existe();
                
              }


 Mostrar()
 {
   console.log(this.elusuario);
   console.log("estoy en mi funcion!")
 };
  Login()
  {
    if(this.Validar(this.elusuario.nick)==false)
    {
      return;
    }
    if(this.Existe()==false)
    {
      console.log("no existe usuario! login");
      let alert = this.alertCrtl.create({
        title: 'Datos incorrectos!',
        message: 'No existe ese nick! o Escribio mal!',
        buttons: ['Ok']
      });
      alert.present();
      return;
    }
    console.log("Sesion iniciada!");  // Acceso a Pagina Principal.
    console.log(this.elusuario);
    this.navCtrl.setRoot(PrincipalPage, {Usuario : this.elusuario}, {animate: true, direction: "forward"});
    let alert = this.alertCrtl.create(//con esto configuramos el mensaje de bienvenida.
      {title: 'Bienvenido',message: this.elusuario.nick,buttons: ['OK']});
        alert.present();//ejecutamos el mansaje.
    //this.navCtrl.setRoot(PrincipalPage, {Usuario : this.elusuario}, {animate: true, direction: "forward"});
  }
  Registrarse()
  {
    if(this.Validar(this.elusuario.nick)==false)
    {
      console.log("Error al guardar nuevo usuario");
      return;
    }
    this.usuarios.push(this.elusuario);
    console.log("Se agrego nuevo usuario a la base correctamente!");
    let alert = this.alertCrtl.create({
        title: 'Listo!',
        message: 'Te registramos con exito. Ya puedes logearte.',
        buttons: ['Ok']
      });
      alert.present();
  }
  Validar(nick)//VALIDO VACIO!
  {
    if(nick==""||nick=="Tu nombre...")
    {
      let alert = this.alertCrtl.create({
        title: 'Importante',
        subTitle: 'Debe ingregar un nick!',
        buttons: ['Ok']
      });
      alert.present();
      return false;
    }
    else
    {
      return true;
    }
  }
Existe():boolean//LISTO VERIFICO SI EXITE USUARIO INGRESADO!
{
  var retorno:boolean;
 retorno=false;
  this.usuarios.forEach( users => {
                  for(let user of users)
                  {
                    if(user.nick==this.elusuario.nick)
                    {
                        console.log("Existe usuario!");
                        console.log(user);
                        this.elusuario=user;
                        retorno=true;
                        break;
                       
                    }
                    else
                    {console.log("El usuario no existe!"); }
                  }
                });
                return retorno;
                
}
  ionViewDidLoad() {console.log('ionViewDidLoad LoginPage');}

}
export class Usuario {
    
    constructor(public nick : string = "", 
                public puntuacion : number = 0,
                public partidas : number = 0,
                public correctas : number = 0, 
                public incorrectas : number = 0)
                {}
}