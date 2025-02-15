export class OrderDetails {
    /*order_details_id: number;*/
    order_id: number;
    item: string;
    quantity: number;
    unitPrice: number;
    total: number;

    constructor(/*order_details_id: number,*/ order_id: number, item: string, quantity: number, unitPrice: number, total: number) {
        /*this.order_details_id = order_details_id;*/
        this.order_id = order_id;
        this.item = item;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.total = total;
    }
}