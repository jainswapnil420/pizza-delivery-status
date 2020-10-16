import { Order } from './../order.model';
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

}
