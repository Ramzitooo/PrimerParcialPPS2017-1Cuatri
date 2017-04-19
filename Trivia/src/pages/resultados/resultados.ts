import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage,Usuario } from '../login/login';//TRAIGO LA CLASE USUARIO
import { AlertController} from "ionic-angular";
import { TriviaPage,Partida } from '../trivia/trivia';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html'
})
export class ResultadosPage {
  user:Usuario;
  mipartida:Partida;
  constructor(public navCtrl: NavController,public navParams: NavParams,public alertCrtl:AlertController)
  {
    this.user = navParams.get("Usuario");
    this.mipartida = navParams.get("Partida");
    if(this.mipartida.correctas!=0||this.mipartida.incorrectas!=0)
    {
        if(this.mipartida.puntuacion==300)
        {
          let alert = this.alertCrtl.create(//con esto configuramos el mensaje de bienvenida.
          {
            title: 'GENIO',
            message: "Eres muy inteligente!",
            buttons: ['Ok']
          });
            alert.present();
        }
        if(this.mipartida.puntuacion==0)
        {
          let alert = this.alertCrtl.create(//con esto configuramos el mensaje de bienvenida.
          {
            title: 'BURRO DE MIERDA',
            message: "Anda a estudiar gil!",
            buttons: ['Ok']
          });
            alert.present();
        }
    }
    
    
  }
  
   Jugar()
  {
    this.navCtrl.setRoot(TriviaPage, 
    {Usuario : this.user}, //ENVIO EL JSON DE MI USUARIO
    {animate: true, 
    direction: "forward"});
  }
  Principal()
  {
    this.navCtrl.setRoot(PrincipalPage, 
    {Usuario : this.user,
    Partida: this.mipartida}, //ENVIO EL JSON DE MI USUARIO
    {animate: true, 
    direction: "forward"});
  }

}