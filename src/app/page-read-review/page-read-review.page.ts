import { ActivatedRoute } from '@angular/router';
import { crudapi } from './../page-review/crudapi';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-read-review',
  templateUrl: './page-read-review.page.html',
  styleUrls: ['./page-read-review.page.scss'],
})
export class PageReadReviewPage implements OnInit {

  placename: String;

  tmpobj: any;

  constructor( public navCtrl: NavController, private crud: crudapi, public actRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.crud.readData().subscribe(data => {
      this.tmpobj = data.map( e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          placename : e.payload.doc.data()['placename'.toString()],
          date : e.payload.doc.data()['date'.toString()],
          location : e.payload.doc.data()['location'.toString()],
          txtreview : e.payload.doc.data()['txtreview'.toString()],
          impressive : e.payload.doc.data()['impressive'.toString()],
        };
      });
    });


  }

  async presentActionSheet(item: any) {
    const actionSheet = document.createElement('ion-action-sheet');
    console.log(item);

    actionSheet.header = 'SELECT';
    actionSheet.cssClass = 'my-custom-class';
    actionSheet.buttons = [ {
      text: 'อ่านรีวิว',
      icon: 'book',
      handler: () => {
        //this.placename = placename;
        this.navCtrl.navigateForward(['page-detail-review', JSON.stringify(item)])
      }
    },{
      text: 'บันทึก',
      icon: 'save',
      handler: () => {
        //this.placename = placename;
        this.navCtrl.navigateForward('/h3-travel-aec/'+ this.placename)
      }
    }];
    document.body.appendChild(actionSheet);
    return actionSheet.present();
  }

  back() {
    this.navCtrl.pop()
  }

  backhome() {
    this.navCtrl.navigateBack('/home')
  }

}
