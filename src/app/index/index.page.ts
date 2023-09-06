import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ionViewDidEnter() {
    setTimeout(() => {
      this.navCtrl.navigateForward('/credential'); // will go to credential page
    }, 10000); // Delay for 3 seconds
  }

  ngOnInit() {
  }

}
