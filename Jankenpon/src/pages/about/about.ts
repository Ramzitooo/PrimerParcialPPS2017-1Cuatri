import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';//AGREGADO!

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  jugador:any;
  constructor(public navCtrl: NavController,public navParams: NavParams) 
  {
    this.jugador=navParams.get("Jugador");
  }
  Volver()
  {
    this.navCtrl.setRoot(MenuPage,{Jugador:this.jugador},{animate: true, direction: "forward"});
  }
}
