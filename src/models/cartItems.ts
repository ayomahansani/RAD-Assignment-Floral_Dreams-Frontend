export class CartItems {
    flowerCode: number;
    flowerName: string;
    flowerUnitPrice: number;
    quantity: number;
    total: number;

    constructor(flowerCode: number, flowerName: string, flowerUnitPrice: number, quantity: number, total: number) {
        this.flowerCode = flowerCode;
        this.flowerName = flowerName;
        this.flowerUnitPrice = flowerUnitPrice;
        this.quantity = quantity;
        this.total = total;
    }
}