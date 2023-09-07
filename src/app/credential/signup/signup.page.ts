import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  termsCondition(){
    this.navCtrl.navigateForward('credential/signup/terms');
  }

  ngOnInit() {
  }

}
