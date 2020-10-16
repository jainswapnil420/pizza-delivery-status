import { Item } from './../items.model';
import { Order, Status } from './../order.model';
import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-book',
  templateUrl: './order-book.component.html',
  styleUrls: ['./order-book.component.css']
})
export class OrderBookComponent implements OnInit {
orderList: Order[];
  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
    this.orderList = this.orderService.getOrdersList();
    console.log(this.orderList);
  }

  totalAmount(items: Item[]): number{
    return items.map((item: Item) => item.price).reduce((a, b) => a + b);
  }
  updateStatus(order: Order): void{
    console.log(order.status);
  }

  isDisabled(order: Order): boolean{
    console.log(order.status, order.status === Status.READYTOSERVE);
    return order.status === Status.READYTOSERVE;
  }
}
