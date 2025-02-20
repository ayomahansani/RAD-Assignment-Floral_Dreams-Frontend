import {SuppliersAndFlowersDetails} from "./suppliers&FlowersDetails.ts";

export class Supplier {
    supplier_id: number;
    supplier_name: string;
    supplier_phone: string;
    supplier_email: string;
    supplier_address: string;
    supplied_Flowers: SuppliersAndFlowersDetails[]
    
    constructor(supplier_id: number, supplier_name: string, supplier_phone: string, supplier_email: string, supplier_address: string, supplied_Flowers: SuppliersAndFlowersDetails[]) {
        this.supplier_id = supplier_id;
        this.supplier_name = supplier_name;
        this.supplier_phone = supplier_phone;
        this.supplier_email = supplier_email;
        this.supplier_address = supplier_address;
        this.supplied_Flowers = supplied_Flowers;
    }
}