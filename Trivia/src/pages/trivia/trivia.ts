import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController} from "ionic-angular";
import { LoginPage,Usuario } from '../login/login';//TRAIGO LA CLASE USUARIO
import { ResultadosPage } from '../resultados/resultados';//AGREGADO
//import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-trivia',
  templateUrl: 'trivia.html'
})
export class TriviaPage 
{
    user :Usuario;//CREO UN OBJETO DE TIPO USUARIO.
    preguntas: Array <Preguntas>;

    pregunta1:Preguntas = new Preguntas();
    pregunta2:Preguntas = new Preguntas();
    pregunta3:Preguntas = new Preguntas();

    puntajePartida:number;

    mipregunta:number;

    constructor(public navCtrl: NavController,public navParams: NavParams,public alertCrtl:AlertController)
    {
        this.user = navParams.get("Usuario");

       this.pregunta1.pregunta="Quien es el mayor goleador de la seleccion argentina de futbol?";
        this.pregunta1.respuestas=["Messi","PepeSand","Wanchope"];
        this.pregunta1.correcta=0;

        this.pregunta2.pregunta="Argentina se encuentra en America del...?";
        this.pregunta2.respuestas=["Norte","Sur","No tengo idea"];
        this.pregunta2.correcta=1;

        this.pregunta3.pregunta="Quien es el actual presidente de la republica Argentina?";
        this.pregunta3.respuestas=["Scioli","Stolbizer","Macri"];
        this.pregunta3.correcta=2;

        this.preguntas = new Array<Preguntas>();

        /*this.preguntas.push(new Preguntas("1+1", ["1", "2", "3"], 1));
        this.preguntas.push(new Preguntas("1+2", ["1", "2", "3"], 2));
        this.preguntas.push(new Preguntas("1+3", ["4", "2", "3"], 0));*/

        this.preguntas.push(this.pregunta1);
        this.preguntas.push(this.pregunta2);
        this.preguntas.push(this.pregunta3);
    
        this.puntajePartida=0;
        this.mipregunta=0;
    }
    Aceptar(opc:number):void
    {
        if(opc == this.preguntas[this.mipregunta].correcta)
        {
            this.user.puntuacion=this.user.puntuacion+100;
            this.puntajePartida=this.puntajePartida+100;
            this.user.correctas++;
            
            console.log("Pregunta "+this.mipregunta+" contesto correctamente!");
        }
        else
        {
            
            this.user.incorrectas++;
            console.log("Pregunta "+this.mipregunta+" contesto incorrectamente!");
        }

        if(this.mipregunta!=2)
        {
            this.mipregunta++;
            console.log("Paso a la siguente pregunta.");
        }
        else
        {
            this.user.partidas++;
            console.log("Se acabo el juego!");
            console.log(this.user);
            this.navCtrl.setRoot(ResultadosPage, 
            {Usuario : this.user,
            Puntaje : this.puntajePartida,}, 
            {animate: true, 
            direction: "forward"});    
        }
    }

}
export class Preguntas
{
    public pregunta : string;
    public respuestas : Array <string>;
    public correcta : number;
    
    constructor(){}

   
    

}