export class Crop {
    crop_code: string;
    crop_common_name: string;
    crop_scientific_name: string;
    crop_image: string;
    crop_category: string;
    crop_season: string;

    constructor(crop_code: string, crop_common_name: string, crop_scientific_name: string, crop_image: string, crop_category: string, crop_season: string) {
        this.crop_code = crop_code;
        this.crop_common_name = crop_common_name;
        this.crop_scientific_name = crop_scientific_name;
        this.crop_image = crop_image;
        this.crop_category = crop_category;
        this.crop_season = crop_season;
    }
}