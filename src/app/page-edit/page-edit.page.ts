import { ActivatedRoute } from '@angular/router';
import { crudapi } from './../crudapi';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.page.html',
  styleUrls: ['./page-edit.page.scss'],
})
export class PageEditPage implements OnInit {

  placename: String;
  date: String;
  location: String;
  txtreview: String;
  impressive: String;
  img: String;

  tmpobj: any;

  constructor(public navCtrl: NavController, private crud: crudapi, public actRoute: ActivatedRoute, public toastCtrl: ToastController ) {
    let sendobj = this.actRoute.snapshot.paramMap.get('sendedit');
    this.tmpobj = JSON.parse(sendobj);

    this.placename = this.tmpobj.placename;
    this.date = this.tmpobj.date;
    this.location = this.tmpobj.location;
    this.txtreview = this.tmpobj.txtreview;
    this.impressive = this.tmpobj.impressive;
    this.img = this.tmpobj.img;
   }

  ngOnInit()  {



    console.log(this.tmpobj);

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
    this.crud.updateData(this.tmpobj.id ,tmpobj);
    this.navCtrl.pop();
    toast.present();
  }

  back() {
    this.navCtrl.pop()
  }

  backhome() {
    this.navCtrl.navigateBack('/home')
  }
}
