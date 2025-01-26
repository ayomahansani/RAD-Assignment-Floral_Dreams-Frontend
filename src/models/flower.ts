export class Flower {
    flower_code: number;
    flower_name: string;
    flower_image: string;
    flower_size: string;
    flower_colour: string;
    flower_unit_price: number;
    flower_qty_on_hand: number;

    constructor(flower_code: number, flower_name: string, flower_image: string, flower_size: string, flower_colour: string, flower_unit_price: number, flower_qty_on_hand: number) {
        this.flower_code = flower_code;
        this.flower_name = flower_name;
        this.flower_image = flower_image;
        this.flower_size = flower_size;
        this.flower_colour = flower_colour;
        this.flower_unit_price = flower_unit_price;
        this.flower_qty_on_hand = flower_qty_on_hand;
    }
}