import { Component, OnInit, Input } from '@angular/core';
import { KiunbiFirestoreService } from '../services/kiunbi-firestore.service';

@Component({
  selector: 'app-kiunbi',
  templateUrl: './kiunbi.component.html',
  styleUrls: ['./kiunbi.component.scss'],
})
export class KiunbiComponent implements OnInit {
  @Input()
  initialValue: number;
  @Input()
  currentValue: number;
  class: string;
  result: string;

  constructor(private kiunbiFirestoreService: KiunbiFirestoreService) {}

  ngOnInit(): void {
    if (this.currentValue == 0) return;

    if (this.currentValue % 3 == 0 && this.currentValue % 5 != 0 && this.currentValue % 7 != 0) {
      this.result = this.currentValue.toString();
      this.class = 'green-color';
      this.kiunbiFirestoreService.pushMultiples(this.result, this.class);
    } else if (this.currentValue % 3 != 0 && this.currentValue % 5 == 0 && this.currentValue % 7 != 0) {
      this.result = this.currentValue.toString();
      this.class = 'red-color';
      this.kiunbiFirestoreService.pushMultiples(this.result, this.class);
    } else if (this.currentValue % 3 != 0 && this.currentValue % 5 != 0 && this.currentValue % 7 == 0) {
      this.result = this.currentValue.toString();
      this.class = 'blue-color';
      this.kiunbiFirestoreService.pushMultiples(this.result, this.class);
    } else if (this.currentValue % 3 == 0 && this.currentValue % 5 == 0 && this.currentValue % 7 != 0) {
      this.result = this.currentValue.toString() + ' (3,5)';
      this.class = 'green-color';
      this.kiunbiFirestoreService.pushMultiples(this.result, this.class);
    } else if (this.currentValue % 3 == 0 && this.currentValue % 5 != 0 && this.currentValue % 7 == 0) {
      this.result = this.currentValue.toString() + ' (3,7)';
      this.class = 'green-color';
      this.kiunbiFirestoreService.pushMultiples(this.result, this.class);
    } else if (this.currentValue % 3 != 0 && this.currentValue % 5 == 0 && this.currentValue % 7 == 0) {
      this.result = this.currentValue.toString() + ' (5,7)';
      this.class = 'red-color';
      this.kiunbiFirestoreService.pushMultiples(this.result, this.class);
    } else if (this.currentValue % 3 == 0 && this.currentValue % 5 == 0 && this.currentValue % 7 == 0) {
      this.result = this.currentValue.toString() + ' (3,5,7)';
      this.class = 'green-color';
      this.kiunbiFirestoreService.pushMultiples(this.result, this.class);
    }

    if (this.currentValue == this.initialValue) this.kiunbiFirestoreService.endRequest();
  }
}
