import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController} from "ionic-angular";
import { Usuario } from '../login/login';//TRAIGO LA CLASE USUARIO
import { ResultadosPage } from '../resultados/resultados';//AGREGADO
import { AngularFire,FirebaseListObservable } from 'angularfire2';//AGREGADO FIRE

//import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-trivia',
  templateUrl: 'trivia.html'
})
export class TriviaPage 
{
    //user :Usuario;//CREO UN OBJETO DE TIPO USUARIO.///////////////////
    user:any;
    preguntas: Array <Preguntas>;//CREO UN ARRAY DE TIPO PREGUNTAS.
 
    usuarios:FirebaseListObservable<any>;//TRAIGO A LOS USUARIOS
    pregunta1:Preguntas = new Preguntas();
    pregunta2:Preguntas = new Preguntas();
    pregunta3:Preguntas = new Preguntas();

    //puntajePartida:number;//PARA EL PUNTAJE DE LA PARTIDA ACTUAL.
    mipartida:Partida;
    mipregunta:number;//LA PREGUNTA ACTUAL

    constructor(public navCtrl: NavController,public navParams: NavParams,public alertCrtl:AlertController,public fire:AngularFire)
    {
        this.usuarios=fire.database.list("\Usuarios");//TRAIGO A TODOS LOS USUARIOS

        this.user = navParams.get("Usuario");//SETEO EL USUARIO LOGEADO.
        //SETEO MIS PREGUNTAS CON DIFERENTES RESPUESTAS Y 1 CORRECTA.
        this.pregunta1.pregunta="Quien es el mayor goleador de la seleccion argentina de futbol?";
        this.pregunta1.respuestas=["Messi","PepeSand","Wanchope"];
        this.pregunta1.correcta=0;

        this.pregunta2.pregunta="Argentina se encuentra en America del...?";
        this.pregunta2.respuestas=["Norte","Sur","No tengo idea"];
        this.pregunta2.correcta=1;

        this.pregunta3.pregunta="Quien es el actual presidente de la republica Argentina?";
        this.pregunta3.respuestas=["Scioli","Stolbizer","Macri"];
        this.pregunta3.correcta=2;

        this.preguntas = new Array<Preguntas>();//INSTANCIO MI ARRAY DE PREGUNTAS. FUNDAMENTAL...
        //AGREGO LAS PREGUNTAS A MI ARRAY
        this.preguntas.push(this.pregunta1);
        this.preguntas.push(this.pregunta2);
        this.preguntas.push(this.pregunta3);
        //CONTADOR EN 0 
        this.mipartida = new Partida();
        //this.mipartida.puntuacion=0;
        this.mipregunta=0;
    }
    Actualizar()
    {
        this.usuarios.update(this.user.$key,this.user);
        console.log("USUARIO ACTUALIZADO TRIVIA FINALIZACION!");
    }
    Aceptar(opc:number):void
    {
        if(opc == this.preguntas[this.mipregunta].correcta)//SI EL BOTON APRETADO ES IGUAL A MI PREGUNTA ACTUAL CON RESPUESTA CORRECTA.
        {
            //EN CASI DE SER VERDAD AGREGO MI PUNTAJE DE 100 POR PREGUNTA CORRECTA.
            this.user.puntuacion=this.user.puntuacion+100;
            this.mipartida.puntuacion=this.mipartida.puntuacion+100;
            this.mipartida.correctas++;
            this.user.correctas++;//CUENTO LAS CORRECTAS EN EL OBJETO USUARIO
            
            console.log("Pregunta "+this.mipregunta+" contesto correctamente!");
        }
        else
        {
            this.mipartida.incorrectas++;
            this.user.incorrectas++;//CUENTO LAS INCORRECTAS EN EL OBJETO USUARIO
            console.log("Pregunta "+this.mipregunta+" contesto incorrectamente!");
        }

        if(this.mipregunta!=2)//EN CASO DE NO LLEGAR A LA ULTIMA PREGUNTA.
        {
            this.mipregunta++;//PASA CON LA SIGUENTE PREGUNTA.
            console.log("Paso a la siguente pregunta.");
        }
        else
        {
            //SI ENTRA VOY A LA PANTALLA DE PUNTUACION Y MANDA LOS DATOS NECESARIO PARA LAS MISMAS.
            this.user.partidas++;
            console.log("Se acabo el juego!");
            console.log(this.user);
            this.Actualizar();
            
            console.log(this.user);
            console.log(this.mipartida);
            this.navCtrl.setRoot(ResultadosPage, //INDICO QUE PAGINA VOY.
            {Usuario : this.user,//MANDA EL USUARIO YA SETEADO.
            Partida : this.mipartida,}, //MANDO EL PUNTAJE DE LA PARTIDA ACTUAL.
            {animate: true, 
            direction: "forward"});    
        }
    }

}
export class Preguntas//CREO UN OBJETO DE TIPO PREGUNTAS.
{
    public pregunta : string;
    public respuestas : Array <string>;
    public correcta : number;
    
    constructor(){}

}
export class Partida//CREO UN OBJETO DE TIPO PREGUNTAS.
{
    
    
    constructor(public puntuacion : number=0,
    public correctas : number=0,
    public incorrectas : number=0,){}

}