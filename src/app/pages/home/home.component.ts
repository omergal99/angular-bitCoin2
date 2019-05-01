import { Component, OnInit } from '@angular/core';
import { BitcoineService } from '../../services/bitcoine.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bitRate: number = 0;

  constructor(private bitcoineService: BitcoineService) { }

  ngOnInit() {
    this.bitcoineService.rateSubject.subscribe((rate) => {
      this.bitRate = rate;
    })
    this.bitcoineService.getRate(23000);
  }
}
