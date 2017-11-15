import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private alertCtrl: AlertController) {
    this.userForm = this.formBuilder.group({
      email : ['',Validators.compose([Validators.required,Validators.email])],
      password : ['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(){
    console.log(this.userForm.value);
    if(this.userForm.value.password==='123456')
      this.navCtrl.pop().then(()=>console.log('connecté'));
    else{
      let alert= this.alertCtrl.create({
        title: 'Mauvais Password',
        subTitle: 'Le mot de passe n\'est pas valide',
        buttons: ['Ok']
        }
      );
      alert.present();
    }
  }

}
