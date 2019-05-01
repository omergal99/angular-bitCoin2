import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoineService {
  rateSubject = new BehaviorSubject<number>(null);

  constructor(private httpClient: HttpClient) { }

  public getRate(coins: number): void {
    // this.httpClient.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    //   .subscribe((value) => {
    //     this.rateSubject.next(value);
    //   })
    this.rateSubject.next(23.555);
  }

  public getMarketPrice() {
    // return marketPrice;
    // return Promise.resolve(marketPrice);
  }

  public getConfirmedTransactions() {
    // return transactionsPrice;
    // return Promise.resolve(transactionsPrice);
  }

}
