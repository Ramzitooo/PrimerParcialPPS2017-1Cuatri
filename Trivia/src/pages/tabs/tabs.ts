import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { LoginPage } from '../login/login';//AGREGADO
import { PrincipalPage } from '../principal/principal';//AGREGADO
import { ResultadosPage } from '../resultados/resultados';//AGREGADO
import { TriviaPage } from '../trivia/trivia';//AGREGADO

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = LoginPage;//AGREGADO
  tab5Root = PrincipalPage;//AGREGADO
  tab6Root = ResultadosPage;//AGREGADO
  tab7Root = TriviaPage;//AGREGADO

  constructor() {

  }
}
