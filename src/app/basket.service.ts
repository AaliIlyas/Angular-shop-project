import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  itemsCount = 0;
  changeCount: Subject<number> = new Subject<number>();

  constructor() {
    this.changeCount.subscribe((value) => {
      this.itemsCount = value
  });
  }

  AddItem(num: number) {
    this.changeCount.next(this.itemsCount + num);
    console.log(this.itemsCount)
  }

  removeItem(num: number) {
    this.changeCount.next(this.itemsCount - num);
  }

  resetBasket() {
    this.changeCount.next(0);
  }
}
