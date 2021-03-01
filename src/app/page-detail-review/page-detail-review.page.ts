import { crudapi } from './../page-review/crudapi';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-detail-review',
  templateUrl: './page-detail-review.page.html',
  styleUrls: ['./page-detail-review.page.scss'],
})
export class PageDetailReviewPage implements OnInit {

  tmpobj: any;



  constructor( public navCtrl: NavController, public actRoute: ActivatedRoute, private crud: crudapi) { }

  ngOnInit() {

    let sendobj = this.actRoute.snapshot.paramMap.get('sendobj');
    this.tmpobj = JSON.parse(sendobj);


  }


  back() {
    this.navCtrl.pop()
  }

  backhome() {
    this.navCtrl.navigateBack('/home')
  }


}
