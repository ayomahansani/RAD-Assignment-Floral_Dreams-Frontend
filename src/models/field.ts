export class Field {
    field_code: string;
    field_name: string;
    field_location: string;
    field_extent_size: number;
    field_image1: string;
    field_image2: string;

    constructor(field_code: string, field_name: string, field_location: string, field_extent_size: number, field_image1: string, field_image2: string) {
        this.field_code = field_code;
        this.field_name = field_name;
        this.field_location = field_location;
        this.field_extent_size = field_extent_size;
        this.field_image1 = field_image1;
        this.field_image2 = field_image2;
    }
}