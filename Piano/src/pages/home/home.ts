import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { MenuPage } from "../menu/menu";


@Component({
  providers:[Vibration,NativeAudio],
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  heroe:string;
  constructor(public navCtrl: NavController,public navParams: NavParams, private vibration:Vibration,private na: NativeAudio) 
  {
    this.heroe=this.navParams.get("Jugador");
    console.log("Mi jugador desde el about es: "+this.heroe);
    this.na.preloadSimple("p1","assets/sonidos/gato.mp3");
    this.na.preloadSimple("p2","assets/sonidos/leon.mp3");
    this.na.preloadSimple("p3","assets/sonidos/lobo.mp3");
    this.na.preloadSimple("p4","assets/sonidos/burro.mp3");
  }
  Vibrar()
  {
    this.vibration.vibrate(1000);
  }
  Sonido()
  {
    this.na.play("p1");
  }
  Boton1()
  {
    console.log("SONIDO DE GATO");
    this.na.play("p1");
    this.Vibrar();
  }
  Boton2()
  {
    console.log("SONIDO DE LEON");
    this.na.play("p2");
    this.Vibrar();
  }
  Boton3()
  {
    console.log("SONIDO DE LOBO");
    this.na.play("p3");
    this.Vibrar();
  }
  Boton4()
  {
    console.log("SONIDO DE BURRO");
    this.na.play("p4");
    this.Vibrar();
  }
  Menu()
  {
    this.navCtrl.setRoot(MenuPage, {Jugador : this.heroe}, 
    {animate: true, direction: "forward"});
  }

}
