import {Flower} from "./flower.ts";

export class OrderItem {
    flower: Flower; // Reference to a Flower object
    quantity_on_hand: number;
    unit_price: number;

    constructor(flower: Flower, quantity_on_hand: number, unit_price: number) {
        this.flower = flower;
        this.quantity_on_hand = quantity_on_hand;
        this.unit_price = unit_price;
    }
}