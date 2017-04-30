import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../login/login';//TRAIGO LA CLASE USUARIO saque login
import { AlertController} from "ionic-angular";
import { TriviaPage,Partida } from '../trivia/trivia';
import { PrincipalPage } from '../principal/principal';
import { AngularFire,FirebaseListObservable } from 'angularfire2';//AGREGADO FIRE


@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html'
})
export class ResultadosPage {
  //user:Usuario;
  user:any;
  mipartida:Partida;
     usuarios:FirebaseListObservable<any>;//TRAIGO A LOS USUARIOS
  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public alertCrtl:AlertController,public fire:AngularFire)
  {
    this.usuarios=fire.database.list("\Usuarios");//TRAIGO A TODOS LOS USUARIOS
    this.user = navParams.get("Usuario");

    this.mipartida = navParams.get("Partida");
/*this.usuarios.forEach( userss => {
                  for(let us of userss)
                  {
                    if(us.nick==this.user.nick)
                    {
                        console.log("Existe usuario! resultados!");
                        console.log(us);
                        this.usuarios.update(us.$key,this.user);
                        
                        break;
                       
                    }
                    
                  }
                });*/

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
/*Actualizar()
    {
        this.usuarios.forEach( userss => {
                  for(let us of userss)
                  {
                    if(us.nick==this.user.nick)
                    {
                        console.log("Existe usuario! TRIVIA");
                        console.log(us);
                        this.usuarios.update(us.$key,this.user);
                        
                        break;
                       
                    }
                    
                  }
                });
    }*/
}