import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable ({
  providedIn: 'root',
})

export class crudapi {

  constructor( private fs: AngularFirestore ) {}


  readData() {
    return this.fs.collection('reviews').snapshotChanges();
  }
}
