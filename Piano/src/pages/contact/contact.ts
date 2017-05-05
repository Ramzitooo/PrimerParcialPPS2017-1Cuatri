import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController} from "ionic-angular";
import { Datos } from '../../providers/datos';
//import { AboutPage } from "../about/about";
import { MenuPage } from "../menu/menu";

@Component({
  providers:[Datos],
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  heroe={nick:"",mail:"defecto@gmail.com",pass:"123"};
  datos:any;
  existe=false;
  constructor(public navCtrl: NavController,
              private ds:Datos,
              public navParams: NavParams,
              public alertCrtl:AlertController) 
  {
    
    this.ds.TraerDatos()
    .then(data => {console.log(data);})
    .catch();
    //this.Existe();
  }
  Login()
  {
     if(this.Validar(this.heroe.nick)==false)
    {
      return;
    }
   
    this.ds.TraerDatos()
    .then( hereos => 
    {
      for(let hero of hereos)
      {
        var flag=0;
        console.log(hero.nick);
        if(hero.nick==this.heroe.nick)
        {
          flag=1;
          console.log("Existe heroe en la base!");
          console.log(hero);
          break;
        }
        else
        {
          console.log("No existe heroe!");
        }
      }
    if(flag==1)
    {
      console.log("Sesion iniciada!");  // Acceso a Pagina Principal.
    console.log(this.heroe);
    this.navCtrl.setRoot(MenuPage, {Heroe : this.heroe.nick}, {animate: true, direction: "forward"});
    let alert = this.alertCrtl.create(//con esto configuramos el mensaje de bienvenida.
      {title: 'Bienvenido: '+this.heroe.nick,buttons: ['OK']});
        alert.present();
    }
    else
    {
      console.log("no existe usuario! login");
      let alert = this.alertCrtl.create({
        title: 'Datos incorrectos!',
        message: 'No existe ese nick! o Escribio mal!',
        buttons: ['Ok']
      });
      alert.present();
    }

    });
  
   
    /*console.log("Sesion iniciada!");  // Acceso a Pagina Principal.
    console.log(this.heroe);*/
    
  }
  Registrarse()
  {
    if(this.Validar(this.heroe.nick)==false)
    {
      console.log("Error al guardar nuevo usuario");
      return;
    }
    this.ds.Agregar(this.heroe)
    .then(datos => {
      console.log("Estoy en mi funcion agregar!");
        console.log(datos);
    })
    .catch();
    console.log("SE AGREGO USUARIO A LA BASE DE DATOS!");
    let alert = this.alertCrtl.create({
        title: 'Listo!',
        message: 'Te registramos con exito. Ya puedes logearte.',
        buttons: ['Ok']
      });
      alert.present();
  }
  Validar(nick)//VALIDO VACIO!
  {
    if(nick==""||nick=="Tu nombre...")
    {
      let alert = this.alertCrtl.create({
        title: 'Importante',
        subTitle: 'Debe ingregar un nick!',
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
  Ver()
  {
    console.log(this.heroe);
  }
  Existe()//LISTO VERIFICO SI EXITE USUARIO INGRESADO!
  {
    var retorno = false;
    this.ds.TraerDatos()
    .then( hereos => 
    {
      for(let hero of hereos)
      {
        console.log(hero.nick);
        if(hero.nick==this.heroe.nick)
        {
          console.log("Existe heroe en la base!");
          console.log(hero);
          retorno=true;
          break;
        }
        else
        {
          console.log("No existe heroe!");
        }
      }
    })
    .catch();
    return retorno;             
  }

}
