import { Injectable } from '@angular/core';

export class Order {


  constructor(public name: string, public surname: string, public items: Array<[string, number]>, public amount: number) { }
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  getOrders(): Order[] {
    return [new Order('Albert', 'Einstein', [['water', 1], ['nuts', 2], ['bread', 2]], 123.34),
      new Order('Maria', 'Sklodowska-Curie', [['carrot', 10], ['onion', 3], ['potato', 1], ['cake', 1]], 234.56),
      new Order('Ignacy', 'Lukasiewicz', [['oil', 30], ['lamp', 1]], 45.44)];
  }

  constructor() {}
}
