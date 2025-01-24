export class Flower {
    flower_code: number;
    flower_name: string;
    flower_image: string;
    flower_quality: string;
    flower_colour: string;
    flower_seller: string;
    
    constructor(flower_code: number, flower_name: string, flower_image: string, flower_quality: string, flower_colour: string, flower_seller: string) {
        this.flower_code = flower_code;
        this.flower_name = flower_name;
        this.flower_image = flower_image;
        this.flower_quality = flower_quality;
        this.flower_colour = flower_colour;
        this.flower_seller = flower_seller;
    }
}