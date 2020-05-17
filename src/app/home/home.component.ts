import { Component, OnInit } from '@angular/core';
import { KiunbiFirestoreService } from '../services/kiunbi-firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedNumber: number;
  array: Array<number> = [];
  enableCalculate: boolean = true;

  constructor(private kiunbiFirestoreService: KiunbiFirestoreService) {}

  ngOnInit() {}

  calculate() {
    this.enableCalculate = false;
    this.array = Array.from({ length: this.selectedNumber }, (v, k) => k + 1);
    this.kiunbiFirestoreService.startRequest(this.selectedNumber);
  }

  reset() {
    this.selectedNumber = 0;
    this.enableCalculate = true;
    this.array = [];
  }
}
