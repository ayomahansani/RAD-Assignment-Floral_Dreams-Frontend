import {OrderDetails} from "./orderDetails.ts";

export class Order {
    order_id: number;
    customer: string;
    order_date: string;
    order_items: OrderDetails[]; // List of items in the placeOrder
    wrapping_charges: number;
    decoration_charges: number;
    sub_total: number;
    discount: number;
    total_amount: number;
    paid_amount: number;
    balance: number;

    constructor(order_id: number, customer: string, order_date: string, order_items: OrderDetails[], wrapping_charges: number, decoration_charges: number, sub_total: number, discount: number, total_amount: number, paid_amount: number, balance: number) {
        this.order_id = order_id;
        this.customer = customer;
        this.order_date = order_date;
        this.order_items = order_items;
        this.wrapping_charges = wrapping_charges;
        this.decoration_charges = decoration_charges;
        this.sub_total = sub_total;
        this.discount = discount;
        this.total_amount = total_amount;
        this.paid_amount = paid_amount;
        this.balance = balance;
    }
}