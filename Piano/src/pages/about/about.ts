import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuPage } from "../menu/menu";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  heroe:string;
  constructor(public navCtrl: NavController,public navParams: NavParams) 
  {
    this.heroe=this.navParams.get("Jugador");
    console.log("Mi jugador desde el about es: "+this.heroe);
  }
  Principal():void
  {
    this.navCtrl.setRoot(MenuPage, {Jugador : this.heroe}, 
    {animate: true, direction: "forward"});
  }
}
