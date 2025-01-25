export class Customer {
    customer_id: number;
    customer_firstName: string;
    customer_lastName: string;
    customer_phone: string;
    customer_email: string;
    customer_address: string;
    gender: string;

    constructor(customer_id: number, customer_firstName: string, customer_lastName: string, customer_phone: string, customer_email: string, customer_address: string, gender: string) {
        this.customer_id = customer_id;
        this.customer_firstName = customer_firstName;
        this.customer_lastName = customer_lastName;
        this.customer_phone = customer_phone;
        this.customer_email = customer_email;
        this.customer_address = customer_address;
        this.gender = gender;
    }
}