import {Customer} from "./customer.ts";
import {OrderItem} from "./orderItem.ts";

export class Order {
    order_id: number;
    customer: Customer; // Reference to a Customer object
    order_date: string;
    order_items: OrderItem[]; // List of items in the order
    wrapping_charges: number;
    decoration_charges: number;
    sub_total: number;
    discount: number;
    total_amount: number;
    paid_amount: number;
    balance: number;

    constructor(order_id: number, customer: Customer, order_date: string, order_items: OrderItem[], wrapping_charges: number, decoration_charges: number, sub_total: number, discount: number, total_amount: number, paid_amount: number, balance: number) {
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