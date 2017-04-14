import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { LoginPage } from '../login/login';
import { PrincipalPage } from '../principal/principal';
import { ResultadosPage } from '../resultados/resultados';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = LoginPage;
  tab5Root = PrincipalPage;
  tab6Root = ResultadosPage;

  constructor() {

  }
}
