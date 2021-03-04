import { ActivatedRoute } from '@angular/router';
import { crudapi } from '../crudapi';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-read-review',
  templateUrl: './page-read-review.page.html',
  styleUrls: ['./page-read-review.page.scss'],
})
export class PageReadReviewPage implements OnInit {

  placename: String;

  tmpobj: any;

  constructor(public navCtrl: NavController, private crud: crudapi, public actRoute: ActivatedRoute, public toastCtrl: ToastController, public alertCtrl: AlertController) { }

  ngOnInit() {
    this.crud.readData().subscribe(data => {
      this.tmpobj = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          placename: e.payload.doc.data()['placename'.toString()],
          date: e.payload.doc.data()['date'.toString()],
          location: e.payload.doc.data()['location'.toString()],
          txtreview: e.payload.doc.data()['txtreview'.toString()],
          impressive: e.payload.doc.data()['impressive'.toString()],
          img: e.payload.doc.data()['img'.toString()],
        };
      });
    });


  }

  async readDetail(item: any) {

    this.navCtrl.navigateForward(['page-detail-review', JSON.stringify(item)])

  }

  back() {
    this.navCtrl.pop()
  }

  backhome() {
    this.navCtrl.navigateBack('/home')
  }

  async delData(item: any) {
    const alert = await this.alertCtrl.create({
      message: 'ยืนยันการลบ',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ลบ',
          handler: () => {
            console.log('Delete Data');
            this.crud.delData(item.id);
          }
        }
      ]
    });
    (await alert).present();
  };

  editData(item : any) {
    this.navCtrl.navigateForward(['/page-edit',JSON.stringify(item)]);
  }
}
