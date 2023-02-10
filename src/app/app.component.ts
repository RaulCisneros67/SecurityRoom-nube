import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}



  Pages = [

    {
      title: 'Registros',
      url: '/inicio',
      icon: 'grid'
    },

    {
      title: 'Alarma',
      url: '/alarma',
      icon: 'alert'
    }
  ];



  async signOut(){
    this.router.navigateByUrl("login2");
  }
}
