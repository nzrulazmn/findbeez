import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  loginPage(){
    this.navCtrl.navigateForward('credential/signup');
  }

  forgotPage(){
    this.navCtrl.navigateForward('credential/forgot');
  }

  ngOnInit() {
  }

}
