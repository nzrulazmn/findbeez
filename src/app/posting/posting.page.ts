import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-posting',
  templateUrl: './posting.page.html',
  styleUrls: ['./posting.page.scss'],
})
export class PostingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
