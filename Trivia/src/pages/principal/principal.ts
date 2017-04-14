import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController} from "ionic-angular";
import { LoginPage,Usuario } from '../login/login';
import { ResultadosPage } from '../resultados/resultados';
import { AboutPage } from '../about/about';



@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {
  usuario: Usuario = new Usuario();
  
  constructor(public navCtrl: NavController,public navParams: NavParams,public alertCrtl:AlertController) 
  {
    
    this.usuario = navParams.get('Usuario');
    
  }
  
  Jugar()
  {
    console.log("IMPLEMENTAR!");
  }
  Resultados()
  {
    this.navCtrl.push(ResultadosPage);
  }
  Arcade()
  {
    this.navCtrl.push(AboutPage);
  }
  Logout()
  {
    let alert = this.alertCrtl.create({
      title: 'Aviso!',
      message: '¿Desea Cerrar la Sesion?',
      buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {console.log('No se Cerro la Sesion.');}
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