import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-select',
  templateUrl: './page-select.page.html',
  styleUrls: ['./page-select.page.scss'],
})
export class PageSelectPage implements OnInit {

  constructor( public navCtrl: NavController, actRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.pop()
  }

  backhome() {
    this.navCtrl.navigateBack('/home')
  }

  toReview() {
    this.navCtrl.navigateForward('/page-review')
  }

  toreadReview() {
    this.navCtrl.navigateForward('/page-read-review')
  }

}
