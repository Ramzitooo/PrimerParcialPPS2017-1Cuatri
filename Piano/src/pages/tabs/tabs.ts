import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';
import { MenuPage } from '../menu/menu';
import { HistorialPage } from '../historial/historial';
import { JuegoPage } from '../juego/juego';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = AboutPage;
  tab2Root = LoginPage;
  tab3Root = MenuPage;
  tab4Root = HistorialPage;
  tab5Root = JuegoPage;

  constructor() {

  }
}
