import {Flower} from "./flower.ts";

export class CartItems {
    flower: Flower; // Reference to a Flower object
    quantity: number;

    constructor(flower: Flower, quantity: number) {
        this.flower = flower;
        this.quantity = quantity;
    }
}