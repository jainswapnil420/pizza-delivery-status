import { Item } from './items.model';
export interface Order {
    customerName: string;
    address: string;
    status: Status;
    items: Item[];
}

export enum Status {
 ORDERRECEIVED = 'Order Received',
 PREPARING = 'Preparing',
 READYTOSERVE = 'Ready to serve'
}
