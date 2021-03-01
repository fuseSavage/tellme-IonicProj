import { crudapi } from './crudapi';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-review',
  templateUrl: './page-review.page.html',
  styleUrls: ['./page-review.page.scss'],
})
export class PageReviewPage implements OnInit {

  placename: String;
  date: String;
  location: String;
  txtreview: String;
  impressive: String;

  constructor( public navCtrl: NavController, private crud: crudapi ) { }

  ngOnInit() {

  }

  back() {
    this.navCtrl.pop()
  }

  backhome() {
    this.navCtrl.navigateBack('/home')
  }

  save() {
    console.log(this.placename);
  }

}
