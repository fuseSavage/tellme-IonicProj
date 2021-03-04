import { crudapi } from '../crudapi';
import { NavController, ToastController } from '@ionic/angular';
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
  img: String;

  constructor( public navCtrl: NavController, private crud: crudapi, public toastCtrl: ToastController ) { }

  ngOnInit() {

  }

  back() {
    this.navCtrl.pop()
  }

  backhome() {
    this.navCtrl.navigateBack('/home')
  }

  async saveData() {
    // console.log(this.placename);

    const toast = await this.toastCtrl.create({
      message: 'บันทึกเรียบร้อย ',
      duration: 2000,
    });

    let tmpobj = {
      placename: this.placename,
      date: this.date,
      location: this.location,
      txtreview: this.txtreview,
      impressive: this.impressive,
      img: this.img,
    };
    this.crud.cerateData(tmpobj);
    this.navCtrl.pop();
    toast.present();
  }

}
