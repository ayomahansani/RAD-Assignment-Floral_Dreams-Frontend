export class SuppliersAndFlowersDetails {
    supplier_id: number;
    flower_code: number;
    flower_qty_on_hand: number;

    constructor(supplier_id: number, flower_code: number, flower_qty_on_hand: number) {
        this.supplier_id = supplier_id;
        this.flower_code = flower_code;
        this.flower_qty_on_hand = flower_qty_on_hand;
    }
}