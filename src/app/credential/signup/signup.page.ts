import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  // create a variable for userinput in form
  userForm: FormGroup;

  constructor(private navCtrl: NavController,
              private authService: AuthService,
              private builder: FormBuilder
              ) {
                // initiallise form in constructor
                this.userForm = this.builder.group({
                  username: new FormControl('', Validators.compose([
                    Validators.required
                  ])),
                  contact: new FormControl('', Validators.compose([
                    Validators.minLength(13),
                    Validators.required
                  ])),
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

  termsCondition(){
    this.navCtrl.navigateForward('credential/signup/terms');
  }

  ngOnInit() {
    // call form, to initialise
    this.userForm;
  }

  // User Sign Up Function
  signupUser(value: { email: any; password: any; }){
    this.authService.createUser(value.email, value.password)
    // return promise
    .then(() => {}, 
    error => {
      //error message
    });
    return this.navCtrl.navigateForward("credential/login");
  }

}
