import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { MenuPage } from '../menu/menu';//AGREGADO!

@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html'
})
export class ResultadosPage {

  juegos:FirebaseListObservable<any[]>;
  jugador:any;
  ganados:Array<any>=[];
  perdidos:Array<any>=[];
  empatados:Array<any>=[];
  seleccion = 'Ganados';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fire:AngularFire) 
  {
    this.jugador=navParams.get("Jugador");
    this.juegos=fire.database.list("/Partidas");
    this.juegos.forEach(games => 
    {
      for(let game of games)
      {
        if(game.estado == "Gano")
        {
          this.ganados.push(game);
        }
        if(game.estado == "Perdio")
        {
          this.perdidos.push(game);
        }
        if(game.estado == "Empato")
        {
          this.empatados.push(game);
        }
      }
    });
    this.ganados = this.ganados.slice().reverse();
    this.perdidos = this.perdidos.slice().reverse();
    this.empatados = this.empatados.slice().reverse();
  }
  Menu()
  {
    this.navCtrl.setRoot(MenuPage,{Jugador:this.jugador},{animate: true, direction: "forward"});
  }

}