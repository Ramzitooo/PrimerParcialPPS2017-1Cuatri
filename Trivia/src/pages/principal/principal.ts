import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController} from "ionic-angular";
import { LoginPage,Usuario } from '../login/login';//TRAIGO LA CLASE USUARIO
import { ResultadosPage } from '../resultados/resultados';//AGREGADO
import { AboutPage } from '../about/about';//AGREGADO
import { TriviaPage } from '../trivia/trivia';//AGREGADO


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {
  usuario: Usuario = new Usuario();//CREO UN OBJETO DE TIPO USUARIO.
  
  constructor(public navCtrl: NavController,public navParams: NavParams,public alertCrtl:AlertController) 
  {
    
    this.usuario = navParams.get('Usuario');//RECUPERO EL JSON DE "USUARIO" DEL LOGIN.
    
  }
  
  Jugar()
  {
    this.navCtrl.setRoot(TriviaPage, 
    {Usuario : this.usuario}, //ENVIO EL JSON DE MI USUARIO
    {animate: true, 
    direction: "forward"});
  }
  Resultados()
  {
    this.navCtrl.push(ResultadosPage);
    console.log("Acceso a la pagina Resultados.");
  }
  Arcade()
  {
    this.navCtrl.push(AboutPage);
    console.log("Acceso a la pagina About o Arcade De");
  }
  Logout()
  {
    let alert = this.alertCrtl.create({
      title: 'Aviso!',
      message: '¿Desea Cerrar Sesion?',
      buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {console.log('Sesecion activa... Sigo en mi pagina Principal');}
      },
      {
        text: 'Aceptar',
        handler: () => {
          console.log('Sescion finalizada... Volviendo al la pagina Login.');
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