import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  collegeRoll:string = ''
  password:string = ''

  constructor(private menu:MenuController, 
    // public afAuth: AngularFireAuth,
    public router: Router,
    public alert:AlertController) {}

  ngOnInit() {}
  
  ionViewWillEnter(){
   this.menu.swipeGesture(false);
  }
  ionViewWillLeave(){
   this.menu.swipeGesture(true);
  }

  // async login() {
  //   const { collegeRoll, password } = this
  //   try {
  //     const res = await this.afAuth.auth.signInWithEmailAndPassword(collegeRoll+'@lec.com' ,password)
  //     this.showAlert("Success","You are logged in")
  //     this.router.navigate(['/notification'])
  //   }
  //   catch(err){
  //     console.dir(err)
  //     if(err.code==="auth/user-not-found"){
  //       console.log("user not found")
  //     }
  //     this.showAlert("Error",err.message)
  //   }
  // }
  async showAlert(header:string,message:string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons:['OK']
    })
    await alert.present()
  }

}
