export class Vehicle {
    vehicle_code: string;
    licence_plate_number: string;
    vehicle_category: string;
    fuel_type: string;
    vehicle_status: string;
    remarks: string;

    constructor(vehicle_code: string, licence_plate_number: string, vehicle_category: string, fuel_type: string, vehicle_status: string, remarks: string) {
        this.vehicle_code = vehicle_code;
        this.licence_plate_number = licence_plate_number;
        this.vehicle_category = vehicle_category;
        this.fuel_type = fuel_type;
        this.vehicle_status = vehicle_status;
        this.remarks = remarks;
    }
}