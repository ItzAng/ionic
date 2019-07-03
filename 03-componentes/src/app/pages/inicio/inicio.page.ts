import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components:  component[] =[
    {
      icon : 'american-football',
      name : 'Action Sheet',
      redirecTo : '/action-sheet'
    },
    {
      icon : 'appstore',
      name : 'Alert',
      redirecTo : '/alert'
    },
    {
      icon : 'beaker',
      name : 'Avatar',
      redirecTo : '/avatar'
    },
    {
      icon : 'radio-button-on',
      name : 'Botones',
      redirecTo : '/button'
    }
    ,
    {
      icon : 'card',
      name : 'Card',
      redirecTo : '/card'
    },
    {
      icon : 'checkmark-circle-outline',
      name : 'Check',
      redirecTo : '/check'
    },
    {
      icon : 'calendar',
      name : 'DateTime',
      redirecTo : '/date-time'
    }
    ,
    {
      icon : 'car',
      name : 'Fab',
      redirecTo : '/fab'
    }
    ,
    {
      icon : 'grid',
      name : 'Grid - rows',
      redirecTo : '/grid'
    },
    {
      icon : 'infinite',
      name : 'Infinite scroll',
      redirecTo : '/infinite-scroll'
    },
    {
      icon : 'hammer',
      name : 'Inputs',
      redirecTo : '/input'
    },
    {
      icon : 'list',
      name : 'Listas Sliding',
      redirecTo : '/list'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

export interface component {
  icon :string;
  name:string;
  redirecTo :string;
}