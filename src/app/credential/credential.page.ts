import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.page.html',
  styleUrls: ['./credential.page.scss'],
})
export class CredentialPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  loginPage(){
    this.navCtrl.navigateForward('credential/login');
  }

  signupPage(){
    this.navCtrl.navigateForward('credential/signup');
  }

  ngOnInit() {
  }

}
