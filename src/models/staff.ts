export class Staff {
    staff_id: string;
    first_name: string;
    last_name: string;
    designation: string;
    gender: string;
    joined_date: string
    date_of_birth: string;
    address: string;
    contact_number: string;
    email: string;
    role: string;

    constructor(staff_id: string, first_name: string, last_name: string, designation: string, gender: string, joined_date: string, date_of_birth: string, address: string, contact_number: string, email: string, role: string) {
        this.staff_id = staff_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.designation = designation;
        this.gender = gender;
        this.joined_date = joined_date;
        this.date_of_birth = date_of_birth;
        this.address = address;
        this.contact_number = contact_number;
        this.email = email;
        this.role = role;
    }
}