import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';//AGREGADO!
import { PrincipalPage } from '../pages/principal/principal';//AGREGADO!
import { ResultadosPage } from '../pages/resultados/resultados';//AGREGADO!
import { TriviaPage } from '../pages/trivia/trivia';//AGREGADO!

import { AngularFireModule} from 'angularfire2';
//firebase
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const myFirebaseConfig = {
    apiKey: "AIzaSyAwxFvAHcJ-lhNZPc2nj3RuNOKZNv_pdjY",
    authDomain: "ramzo-318ff.firebaseapp.com",
    databaseURL: "https://ramzo-318ff.firebaseio.com",
    projectId: "ramzo-318ff",
    storageBucket: "ramzo-318ff.appspot.com",
    messagingSenderId: "372937173356"
};//AGREGAMOS! firebase



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    LoginPage,//AGREGADO!
    PrincipalPage,//AGREGADO!
    ResultadosPage,//AGREGADO!
    TriviaPage//AGREGADO!
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(myFirebaseConfig)//firebase
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    LoginPage,//AGREGADO!
    PrincipalPage,//AGREGADO!
    ResultadosPage,//AGREGADO!
    TriviaPage//AGREGADO!
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
