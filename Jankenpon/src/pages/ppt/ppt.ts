import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MenuPage } from '../menu/menu';//AGREGADO!


@Component({
  selector: 'page-ppt',
  templateUrl: 'ppt.html'
})
export class PptPage {

  resultado:string="";
  fecha:string;
  juegos:FirebaseListObservable<any[]>;
  jugadores:FirebaseListObservable<any[]>;
  maquina="???";
  eligio="???";
  ia:any=0;
  today:Date = new Date();
  partida={nick:"",fecha:"",estado:""};
  jugador:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toas: ToastController,
              public fire: AngularFire) 
  {
    this.jugador=navParams.get("Jugador");//TRAIGO EL USUARIO DESDE EL MENU.
    console.log("Jugador desde la pagina de juego es:");
    console.log(this.jugador);//MUESTRO EL JUGADOR
    this.juegos=fire.database.list("/Partidas");//TRAIGO LAS PARTIDAS DE MI BASE DE DATOS.
    this.jugadores=fire.database.list("/Jugadores");
    this.partida.nick=this.jugador.nick;
   
  }
  Jugar(boton)
  {
    var random = Math.floor(Math.random()*3)+1;
    this.eligio=this.Saber(boton);
    this.maquina=this.Saber(random)
    this.ia=random;
    console.log("La maquina eligio : "+random+" osea :"+this.Saber(random));
    console.log("El usuario eligio: "+boton+" osea :"+this.Saber(boton));
    if(boton==random)
    {
      this.resultado="Empato";
    }
    //EN CASO DE QUE JUEGE PIEDRA
    if(boton==1&&random==3)
    {
      this.resultado="Gano";
    }
    else
    {
      if(boton==1&&random==2)
      {
        this.resultado="Perdio";
      }
    }
    //EN CASO DE QUE JUEGE PAPEL
    if(boton==2&&random==1)
    {
      this.resultado="Gano";
    }
    else
    {
      if(boton==2&&random==3)
      {
        this.resultado="Perdio";
      }
    }
    //EN CASO DE QUE JUEGE TIJERA
    if(boton==3&&random==2)
    {
      this.resultado="Gano";
    }
    else
    {
      if(boton==3&&random==1)
      {
        this.resultado="Perdio";
      }
    }
    console.clear()
    this.SubirDatos();
    this.Actualizar(this.resultado);
    console.log(this.resultado);
    console.log(this.jugador);
    if(this.resultado=="Perdio")
    {
      this.toasPerder();
    }
    if(this.resultado=="Gano")
    {
      this.toasGanar();
    }
    if(this.resultado=="Empato")
    {
      this.toasEmpatar();
    }
    
  }
  toasGanar() {
    let toast = this.toas.create({
      message: 'Ganaste!',
      duration: 1000
    });
    toast.present();
  }
  toasEmpatar() {
    let toast = this.toas.create({
      message: 'Empataste!',
      duration: 1000
    });
    toast.present();
  }
  toasPerder() {
    let toast = this.toas.create({
      message: 'Perdiste!',
      duration: 1000
    });
    toast.present();
  }
  Saber(num):string
  {
    var retorno:string;
    switch(num)
    {
      case 1:
      retorno="Piedra";
      break;
      case 2:
      retorno="Papel";
      break;
      case 3:
      retorno="Tijera";
      break;
      
    }
    return retorno;
  }
  Actualizar(obj)
  {
    if(obj=="Gano")
    {
      this.jugador.ganados=this.jugador.ganados+1
    }
    if(obj=="Perdio")
    {
      this.jugador.perdidos=this.jugador.perdidos+1
    }
    if(obj=="Empato")
    {
      this.jugador.empatados=this.jugador.empatados+1
    }
    console.log("Se actualizo jugador!");
    this.jugadores.update(this.jugador.$key,this.jugador);
  }
  SubirDatos()
  {
    console.log(this.today);
    this.fecha = this.today.getDay().toString()+" - "+this.today.getMonth().toString()+" - "+this.today.getFullYear().toString();
    console.log(this.fecha);
    this.partida.fecha=this.fecha;
    this.partida.estado=this.resultado;
    console.log("La partida a subir es:");
    console.log(this.partida);
    this.juegos.push(this.partida);
    console.log("Se agrego partida nueva!")
  }
  Menu()
  {
    this.navCtrl.setRoot(MenuPage,{Jugador:this.jugador},{animate: true, direction: "forward"});
  }
}