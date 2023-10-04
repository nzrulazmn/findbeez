import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle'; //u need this
import { AuthService } from 'src/app/services/auth.service'; // connect to auth service
import { getAuth } from 'firebase/auth';

register();

@Component({
  selector: 'app-myportfolio',
  templateUrl: './myportfolio.page.html',
  styleUrls: ['./myportfolio.page.scss'],
})
export class MyportfolioPage implements OnInit {

  displayName: any;
  userImg: any;

  constructor(
    private authService: AuthService
  ) { 
  }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.getUserdata();
  }

  getUserdata() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user != null) {
      this.displayName = user.displayName;
      this.userImg = user.photoURL;
    }
  }


}
