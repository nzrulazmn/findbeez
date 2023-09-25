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

  // create a variable for userinput in form
  userForm: FormGroup;

  constructor(private navCtrl: NavController,
    private authService: AuthService,
    private builder: FormBuilder
    ) {
      // initiallise form in constructor
      this.userForm = this.builder.group({
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.minLength(8),
          Validators.required
        ])),
      });
    }

  loginPage(){
    this.navCtrl.navigateForward('credential/signup');
  }

  forgotPage(){
    this.navCtrl.navigateForward('credential/forgot');
  }

  ngOnInit() {
    this.userForm;
  }

  signinUser(value: { email: any; password: any; }){
    this.authService.loginUser(value.email, value.password)
    // return promise
    .then(() => {
      return this.navCtrl.navigateForward("home");
    }, 
    error => {
      //error message
    });
  }

}
