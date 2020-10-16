import { Order, Status } from './order.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrdersList(): Order[]{
    const orderList: Order[] = [];
    orderList.push({
      customerName: 'Swapnil',
      address: 'Dombivali',
      quantity: 2,
      amount: 540,
      status: Status.ORDERRECEIVED,
      items: [{name: 'Burger', price: 250}, {name: 'Pizza', price: 290}]
    });
    orderList.push({
      customerName: 'Rahul',
      address: 'Andheri',
      quantity: 3,
      amount: 600,
      status: Status.PREPARING,
      items: [{name: 'Bun', price: 250}, {name: 'Pizza', price: 190}, {name: 'Pizza Cheese', price: 160}]
    });
    orderList.push({
      customerName: 'Raj',
      address: 'Sion',
      quantity: 3,
      amount: 540,
      status: Status.READYTOSERVE,
      items: [{name: 'Bun', price: 250}, {name: 'Pizza', price: 190}, {name: 'Pizza Cheese', price: 160}]
    });
    orderList.push({
      customerName: 'Suraj',
      address: 'Mumbai',
      quantity: 2,
      amount: 740,
      status: Status.ORDERRECEIVED,
      items: [{name: 'Burger', price: 250}, {name: 'Pizza', price: 290}]
    });
    orderList.push({
      customerName: 'Suresh',
      address: 'Mumbai',
      quantity: 2,
      amount: 840,
      status: Status.PREPARING,
      items: [{name: 'Burger', price: 250}, {name: 'Pizza', price: 290}]
    });
    return orderList;
  }
}
