import { Order, Status } from './order.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  modifiedOrderList = new Subject<Order[]>();
 orderList: Order[] = [
    {
      customerName: 'Swapnil',
      address: 'Dombivali',
      status: Status.ORDERRECEIVED,
      items: [{name: 'Burger', price: 250}, {name: 'Pizza', price: 290}]
    }, {
      customerName: 'Rahul',
      address: 'Andheri',
      status: Status.PREPARING,
      items: [{name: 'Bun', price: 250}, {name: 'Pizza', price: 190}, {name: 'Pizza Cheese', price: 160}]
    }, {
      customerName: 'Raj',
      address: 'Sion',
      status: Status.READYTOSERVE,
      items: [{name: 'Bun', price: 250}, {name: 'Pizza', price: 190}, {name: 'Pizza Cheese', price: 160}]
    },
    {
      customerName: 'Suraj',
      address: 'Mumbai',
      status: Status.ORDERRECEIVED,
      items: [{name: 'Burger', price: 250}, {name: 'Pizza', price: 290}]
    }, {
      customerName: 'Suresh',
      address: 'Mumbai',
      status: Status.PREPARING,
      items: [{name: 'Burger', price: 250}, {name: 'Pizza', price: 290}]
    }
  ];

  constructor() { }

  getOrdersList(): Order[]{
    return this.orderList;
  }

  updateOrderList(order: Order): void{
    const updatedList: Order[] = [];
    this.modifiedOrderList.next(updatedList);
  }
}
