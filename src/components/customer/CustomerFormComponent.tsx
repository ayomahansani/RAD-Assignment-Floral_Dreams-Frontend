import {Customer} from "../../models/customer.ts";
import {forwardRef, useImperativeHandle, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {addCustomer, updateCustomer} from "../../reducers/CustomerSlice.ts";

interface RootState {
    customer: Customer[];
}

const CustomerFormComponent = forwardRef(({ onCloseModal }: { onCloseModal: () => void }, ref) => {
    const customers = useSelector((store: RootState) => store.customer);
    const dispatch = useDispatch();

    const [customerId, setCustomerId] = useState<number | undefined>();
    const [customerFirstName, setCustomerFirstName] = useState<string>("");
    const [customerLastName, setCustomerLastName] = useState<string>("");
    const [customerPhone, setCustomerPhone] = useState<string>("");
    const [customerEmail, setCustomerEmail] = useState<string>("");
    const [customerAddress, setCustomerAddress] = useState<string>("");
    const [gender, setGender] = useState<string>("");

    const [editMode, setEditMode] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
        editCustomer(customer: Customer) {
            setCustomerId(customer.customer_id);
            setCustomerFirstName(customer.customer_firstName);
            setCustomerLastName(customer.customer_lastName);
            setCustomerPhone(customer.customer_phone);
            setCustomerEmail(customer.customer_email);
            setCustomerAddress(customer.customer_address);
            setGender(customer.gender);
            setEditMode(true);
        }
    }));

    const handleCustomerOperation = (type: "ADD_CUSTOMER" | "UPDATE_CUSTOMER") => {
        if (!customerId || !customerFirstName || !customerLastName || !customerPhone || !customerEmail || !customerAddress || !gender) {
            toast.error("Please fill out all required fields.", {
                position: "bottom-right",
                autoClose: 2000,
            });
            return;
        }

        const newCustomer: Customer = {
            customer_id: customerId,
            customer_firstName: customerFirstName,
            customer_lastName: customerLastName,
            customer_phone: customerPhone,
            customer_email: customerEmail,
            customer_address: customerAddress,
            gender: gender,
        }

        switch (type) {
            case "ADD_CUSTOMER":
                dispatch(addCustomer(newCustomer));
                toast.success("Customer saved successfully!", {
                    position: "bottom-right",
                    autoClose: 2000,
                });
                clearForm();
                onCloseModal(); // Close the modal after saving
                break;
            case "UPDATE_CUSTOMER":
                dispatch(updateCustomer(newCustomer));
                toast.success("Customer updated successfully!", {
                    position: "bottom-right",
                    autoClose: 2000,
                });
                clearForm();
                setEditMode(false);
                onCloseModal(); // Close the modal after saving
                break;
            default:
                break;
        }
    };

    const clearForm = () => {
        setCustomerId(undefined);
        setCustomerFirstName("");
        setCustomerLastName("");
        setCustomerPhone("");
        setCustomerEmail("");
        setCustomerAddress("");
        setGender("");
        setEditMode(false);
    };

    const handleSearchByCustomerId = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const foundCustomer = customers.find((customer: Customer) => customer.customer_id === customerId);
            if (foundCustomer) {
                setCustomerFirstName(foundCustomer.customer_firstName);
                setCustomerLastName(foundCustomer.customer_lastName);
                setCustomerPhone(foundCustomer.customer_phone);
                setCustomerEmail(foundCustomer.customer_email);
                setCustomerAddress(foundCustomer.customer_address);
                setGender(foundCustomer.gender);
                setEditMode(true);
            } else {
                alert("Customer not found.");
            }
        }
    };

    return (
        <>
            <form
                className="mx-auto mt-0 p-3 rounded-lg border-2 border-[#432e32] shadow-lg bg-[#bda6a6]"
                style={{
                    width: "100%", // Adjust form width
                    maxWidth: "600px", // Set a maximum width for responsiveness
                }}
            >
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="customer_id" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Id
                        </label>
                        <input
                            type="text"
                            id="customer_id"
                            value={customerId || ""}
                            onChange={(e) => setCustomerId(Number(e.target.value))}
                            onKeyDown={handleSearchByCustomerId}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="01"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="customer_firstName" className="block mb-2 text-sm font-bold text-[#432e32]">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="customer_firstName"
                            value={customerFirstName}
                            onChange={(e) => setCustomerFirstName(e.target.value)}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="Kiyo"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="customer_lastName" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="customer_lastName"
                            value={customerLastName}
                            onChange={(e) => setCustomerLastName(e.target.value)}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="Mohan"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="customer_phone" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Contact
                        </label>
                        <input
                            type="text"
                            id="customer_phone"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="0773425678"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="customer_email" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Email
                        </label>
                        <input
                            type="email"
                            id="customer_email"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="kiyo@gmail.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="customer_address" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Address
                        </label>
                        <input
                            type="text"
                            id="customer_address"
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="Colombo"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Gender
                        </label>
                        <select
                            id="gender"
                            className="w-full p-1 border border-[#432e32] text-md rounded bg-gray-100 focus:outline-none shadow-md"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                select the gender
                            </option>
                            <option value="Male">Average</option>
                            <option value="Female">Premium</option>
                        </select>
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 mx-20 mt-5 mb-3">
                    <button
                        type="button"
                        onClick={() => handleCustomerOperation(editMode ? "UPDATE_CUSTOMER" : "ADD_CUSTOMER")}
                        className="w-full h-9 bg-yellow-600 text-black font-bold border-2 border-yellow-600 rounded-lg text-center shadow-lg hover:bg-transparent hover:text-black hover:border-black"
                        style={{
                            fontFamily: "'Nunito Sans', sans-serif", // Clean and modern font
                            letterSpacing: "0.5px", // Slight letter spacing for elegance
                        }}
                    >
                        {editMode ? "Update Customer" : "Add Customer"}
                    </button>
                    <button
                        type="button"
                        onClick={() => clearForm()}
                        className="w-full h-9 bg-pink-900 text-white font-bold border-2 border-pink-900 rounded-lg text-center shadow-lg hover:bg-transparent hover:text-black hover:border-black"
                        style={{
                            fontFamily: "'Nunito Sans', sans-serif", // Clean and modern font
                            letterSpacing: "0.5px", // Slight letter spacing for elegance
                        }}
                    >
                        Clear
                    </button>
                </div>
            </form>
        </>
    );

});

export default CustomerFormComponent;