import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController} from "ionic-angular";
import { AngularFire,FirebaseListObservable } from 'angularfire2';
import { MenuPage } from '../menu/menu';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  jugadores:FirebaseListObservable<any[]>;//TODOS LOS JUGADORES!
  jugador2:any;//Para la KEY!
  jugador:Jugador = new Jugador();//Para los datos!
  
  lafecha:string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCrtl:AlertController,
              public fire: AngularFire) 
  {
    
    this.jugadores=this.fire.database.list("/Jugadores");//TRAIGO A LOS JUGADORES!
    this.Existe();

  }
  Login()
  {
    if(this.Validar(this.jugador.nick)==false)
    {
      return;
    }
    if(this.Existe()==false)
    {
      console.log("no existe jugador!! login");
      let alert = this.alertCrtl.create({
        title: 'Datos incorrectos!',
        message: 'No existe ese nick! o Escribio mal!',
        buttons: ['Ok']
      });
      alert.present();
      return;
    }
    console.log("Muestro mi Jugador login!");
    console.log(this.jugador);
    this.navCtrl.setRoot(MenuPage, {Jugador: this.jugador}, {animate: true, direction: "forward"});
    let alert = this.alertCrtl.create(//con esto configuramos el mensaje de bienvenida.
      {title:"Bienvenido: "+this.jugador.nick,buttons: ['OK']});
        alert.present();
    
    //this.jugadores.update(this.jugador2.$key,this.jugador);
  }
  Registrar()
  {
    if(this.Validar(this.jugador.nick)==false)
    {
      console.log("Error al guardar nuevo usuario");
      return;
    }
    this.jugador.empatados=0;
    this.jugador.perdidos=0;
    this.jugador.ganados=0;
    this.jugadores.push(this.jugador);
    console.log("Se agrego nuevo usuario a la base correctamente!");
    let alert = this.alertCrtl.create({
        title: 'Listo!',
        message: 'Te registramos con exito. Ya puedes logearte.',
        buttons: ['Ok']
      });
      alert.present();
  }
  Existe():boolean//LISTO VERIFICO SI EXITE USUARIO INGRESADO!
{
  var retorno:boolean;
 retorno=false;
  this.jugadores.forEach( gamers => 
  {
                  for(let gamer of gamers)
                  {
                    if(gamer.nick==this.jugador.nick)
                    {
                        console.log("Existe usuario!");
                        //console.log(gamer);
                        this.jugador2=gamer;
                        this.jugador=gamer;
                        retorno=true;
                        break;
                    }
                    else
                    {console.log("El usuario no existe!"); }
                  }
                });
                return retorno;
                
}
  Validar(nick)//VALIDO VACIO!
  {
    if(nick=="")
    {
      let alert = this.alertCrtl.create({
        title: 'Importante',
        message: 'Debe ingresar un nick!',
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
}
export class Jugador {
    
    constructor(public nick : string = "", 
                public ganados : number = 0,
                public perdidos : number = 0,
                public empatados : number = 0)
                {}
}