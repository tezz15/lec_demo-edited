import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  collegeRoll:string = ''
  password:string = ''
  cpassword:string = ''
  student:any;

  constructor(
    // public afAuth: AngularFireAuth, 
    public alert: AlertController, 
    public router:Router,
    public http: HTTP,
    ) { 
      this.student = { };
    }

  ngOnInit() {
  }
  // async signup(){
  //   const {collegeRoll, password, cpassword} = this
  //   if(password !== cpassword) {
  //     return console.error("Passwords don't match")
  //   }
  //   try{
  //     const res = await this.afAuth.auth.createUserWithEmailAndPassword(collegeRoll+"@lec.com",password)
  //     console.log(res) 
  //     this.showAlert("Success","Account successfully created")
  //     this.router.navigate(['notification'])
  //   }
  //   catch(error) {
  //     console.dir(error)
  //     this.showAlert("Error",error.message)
  //   }
  // }

  async signup(){
    if(this.student.password === this.student.cpassword){
      this.http.post("https://lec-app.000webhostapp.com//register.php",this.student,{}).then(res=>{
        console.log(res);
      });
    }
    else {
      this.showAlert("Error","Password didnot match!!");
    }
  }

  async showAlert(header:string, message:string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons:['OK']
    })
    await alert.present()
  }

}
