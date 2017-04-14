import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController} from "ionic-angular";


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

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCrtl:AlertController) {}


 user:Usuario= new Usuario();
   Login(){
  if (this.user.nick=="Ramzo")
  {
    console.log("Iniciando Sesion");  // Acceso a Pagina Principal.
    let alert = this.alertCrtl.create(//con esto configuramos el mensaje
      {
        title: 'Bienvenido',
        message: this.user.nick,
        buttons: ['Ok']
      });
        alert.present();//ejecutamos el mansaje
    this.navCtrl.setRoot(PrincipalPage, {
      Usuario : this.user
    }, {
      animate: true, 
      direction: "forward"
    });
  }
  else
  	{
      console.log("Email y/o Password incorrecto!!!");
      let alert = this.alertCrtl.create({
        title: 'Error',
        subTitle: 'El usuario ingresado no existe!',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

  ionViewDidLoad() {console.log('ionViewDidLoad LoginPage');}

}
export class Usuario {
    nick:string;
    pass:string;
    constructor(){}
}