import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service'; 
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editportfolio',
  templateUrl: './editportfolio.page.html',
  styleUrls: ['./editportfolio.page.scss'],
})
export class EditportfolioPage implements OnInit {
  updateForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private builder: FormBuilder
  ) {
    this.updateForm = this.builder.group({
      username: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ngOnInit() {
    this.updateForm
  }

  updateUser(value: { username: any }){
    this.authService.updateUser(value.username)
      // return promise
    .then(() => {
    },
    error => {
      //error message

    });
    this.navCtrl.navigateForward("home");
  }

}
