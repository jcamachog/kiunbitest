import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class KiunbiFirestoreService {
  array: Array<any> = [];

  constructor(private firestore: AngularFirestore) {}

  startRequest(value: number) {
    //console.log('startRequest');
    this.array = [];
    var date = new Date();
    this.array.push({ selectedNumber: value.toString(), datetime: date.toISOString() });
  }

  pushMultiples(value: string, color: string) {
    //console.log('push');
    this.array.push({ multiple: value, color: color });
  }

  endRequest() {
    //console.log('endRequest');
    //console.log(this.array);
    let jsonObj = {
      request: this.array,
    };
    this.firestore.collection('kiunbitest').add(jsonObj);
  }
}
