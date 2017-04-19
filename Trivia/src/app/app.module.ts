import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';//AGREGADO!
import { PrincipalPage } from '../pages/principal/principal';//AGREGADO!
import { ResultadosPage } from '../pages/resultados/resultados';//AGREGADO!
import { TriviaPage } from '../pages/trivia/trivia';//AGREGADO!

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    //ContactPage,
    HomePage,
    TabsPage,
    LoginPage,//AGREGADO!
    PrincipalPage,//AGREGADO!
    ResultadosPage,//AGREGADO!
    TriviaPage//AGREGADO!
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    //ContactPage,
    HomePage,
    TabsPage,
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
