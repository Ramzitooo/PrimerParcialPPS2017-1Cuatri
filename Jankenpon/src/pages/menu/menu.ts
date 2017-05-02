import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController} from "ionic-angular";
import { AboutPage } from '../about/about';
import { LoginPage,Jugador } from '../login/login';
import { ResultadosPage } from '../resultados/resultados';
import { PptPage } from '../ppt/ppt';//AGREGADO!

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  jugador:Jugador;//CREO UN OBJETO JUGADOR!

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCrtl: AlertController) 
  {
    this.jugador=navParams.get("Jugador");//TRAIGO EL JUGADOR DEL LOGIN.
    console.log("Muestro el jugador desde el menu: ");
    console.log(this.jugador);

  }
  Jugar()
  {
    this.navCtrl.setRoot(
      PptPage,//SETEO PARA IR LA PAGINA DEL JUEGO.
      {Jugador:this.jugador},//ENVIDO EL JUGADOR QUE TENGO EN EL MENU.
      {animate: true, direction: "forward"});//ANIMACION.
  }
  Arcade()
  {
    this.navCtrl.setRoot(
      AboutPage,//SETEO PARA IR LA PAGINA DEL JUEGO.
      {Jugador:this.jugador},//ENVIDO EL JUGADOR QUE TENGO EN EL MENU.
      {animate: true, direction: "forward"});//ANIMACION.
  }
  Resultado()
  {
    this.navCtrl.setRoot(
      ResultadosPage,//SETEO PARA IR LA PAGINA DEL JUEGO.
      {Jugador:this.jugador},//ENVIDO EL JUGADOR QUE TENGO EN EL MENU.
      {animate: true, direction: "forward"});//ANIMACION.
  }
  Salir()
  {
    let alert = this.alertCrtl.create({
      title: 'Aviso',
      message: '¿Desea Salir?',
      buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('No se Cerro la Sesion.');
        }
      },
      {
        text: 'Aceptar',
        handler: () => {
          console.log('Cerrando Sesion.');
          this.navCtrl.setRoot(LoginPage, {}, {
          animate: true, 
          direction: "backward"
          });
        }
      }
    ]
    });
    alert.present();
  }


}