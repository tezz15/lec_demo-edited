import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';


import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public pages = [
    {
      title:'Notification',
      url:'/notification',
      icon:'notifications'
    },
    {
      title:'Schedule',
      url:'/schedule',
      icon:'time'
    },
    {
      title:'Assignment',
      url:'/assignment',
      icon:'create'
    },
    {
      title:'Notes',
      url:'/notes',
      icon:'document-text'
    },
    {
      title:'Logout',
      url:'/logout',
      icon:'person-circle'
    }
  ]
  selectedPath = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router
  ) {
    this.router.events.subscribe((event:RouterEvent)=> {
      this.selectedPath = event.url;
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }
}
