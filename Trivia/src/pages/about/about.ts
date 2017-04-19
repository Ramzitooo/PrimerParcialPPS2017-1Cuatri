import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../login/login';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  user:Usuario;
  constructor(public navCtrl: NavController,public navParams: NavParams) 
  {
    this.user = navParams.get("Usuario");
  }
  Principal():void
  {
    this.navCtrl.setRoot(PrincipalPage, 
    {Usuario : this.user}, //ENVIO EL JSON DE MI USUARIO
    {animate: true, 
    direction: "forward"});
  }
}
