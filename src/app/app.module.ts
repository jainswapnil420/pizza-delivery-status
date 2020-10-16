import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderBookComponent } from './order/order-book/order-book.component';
import { ItemDetailsComponent } from './order/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderBookComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
