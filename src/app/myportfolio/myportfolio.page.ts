import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle'; //u need this

register();

@Component({
  selector: 'app-myportfolio',
  templateUrl: './myportfolio.page.html',
  styleUrls: ['./myportfolio.page.scss'],
})
export class MyportfolioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
