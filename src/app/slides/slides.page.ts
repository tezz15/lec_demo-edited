import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {}
  
  ionViewWillEnter(){
    this.menu.swipeGesture(false);
  }
  ionViewWillLeave(){
   this.menu.swipeGesture(true);
  }


}
