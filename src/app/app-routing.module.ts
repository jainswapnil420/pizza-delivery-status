import { ItemDetailsComponent } from './order/item-details/item-details.component';
import { OrderBookComponent } from './order/order-book/order-book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '/', component: OrderBookComponent},
  {path: 'order-detail', component: ItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
