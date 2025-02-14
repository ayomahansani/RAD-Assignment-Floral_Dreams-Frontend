import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/Store.ts";
import {Flower} from "../../models/flower.ts";
import {Customer} from "../../models/customer.ts";
import {viewCustomers} from "../../reducers/CustomerSlice.ts";
import {viewFlowers} from "../../reducers/FlowerSlice.ts";
import {CartItems} from "../../models/cartItems.ts";
import {toast} from "react-toastify";

interface RootState {
    flower: Flower[]; // Adjust type based on your Flower model
    customer: Customer[]; // Adjust type based on your Customer model
}

const PlaceOrderFormComponent = ({ onAddItem }: { onAddItem: (item: any) => void }) => {

    const dispatch = useDispatch<AppDispatch>();
    const flowers = useSelector((state: RootState) => state.flower); // Get flowers from Redux store
    const customers = useSelector((state: RootState) => state.customer); // Get customers from Redux store

    const [orderId, setOrderId] = useState("");
    const [date, setDate] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [itemCode, setItemCode] = useState<number | undefined>();
    const [itemName, setItemName] = useState("");
    const [unitPrice, setUnitPrice] = useState<number | undefined>();
    const [qtyOnHand, setQtyOnHand] = useState<number | undefined>();
    const [discount, setDiscount] = useState("");
    const [qty, setQty] = useState<number | undefined>();
    const [total, setTotal] = useState<number | undefined>(0);

    useEffect(() => {
        // Auto-generate the date
        const currentDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
        setDate(currentDate);
    }, []);

    useEffect(() => {
        dispatch(viewCustomers());
        dispatch(viewFlowers());
    }, [dispatch]);

    const handleCustomerSelect = (selectedEmail: string) => {
        setEmail(selectedEmail);
        const selectedCustomer = customers.find((customer) => customer.customer_email === selectedEmail);
        if (selectedCustomer) {
            setCustomerName(selectedCustomer.customer_firstName);
            setCustomerPhone(selectedCustomer.customer_phone);
            setAddress(selectedCustomer.customer_address);
        }
    };

    const handleItemSelect = (selectedItemName: string) => {
        setItemName(selectedItemName);
        const selectedFlower = flowers.find((flower) => flower.flower_name === selectedItemName);
        if (selectedFlower) {
            setQtyOnHand(selectedFlower.flower_qty_on_hand);
            setUnitPrice(selectedFlower.flower_unit_price);
            setItemCode(selectedFlower.flower_code)
        }
    };

    function clearForm() {

    }

    const handleAddItemToCart = () => {
        if (!orderId || !email || !itemName || !qty || !unitPrice) {
            toast.error("Please fill out all required fields.", {
                position: "bottom-right",
                autoClose: 2000,
            });
            return;
        }

        if (qtyOnHand !== undefined && qty > qtyOnHand) {
            toast.error("Quantity exceeds available stock!", {
                position: "bottom-right",
                autoClose: 2000,
            });
            return;
        }

        const totalAmount = unitPrice * qty;

        const newItem = new CartItems(
            itemCode!,
            itemName,
            unitPrice,
            qty,
            totalAmount
        );

        onAddItem(newItem);
        clearForm();
    };


    const handleClearForm = () => {
        setCustomerName("");
        setCustomerPhone("");
        setAddress("");
        setEmail("");
        setItemName("");
        setQtyOnHand(undefined);
        setUnitPrice(undefined);
        setQty(undefined);
        setTotal(0);
    };

    return (
        <div className="flex gap-3">

            {/* Original Order Form */}
            <div className="w-1/2 p-4 border-2 border-[#432e32] rounded-lg shadow-md bg-[#bda6a6] mb-2">

                <form
                    className="grid grid-cols-2 gap-3"
                    onSubmit={(e) => e.preventDefault()}
                >
                    {/* Order ID */}
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Order ID"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            required
                        />
                    </div>

                    {/* Date */}
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Date"
                            value={date}
                            readOnly
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            required
                        />
                    </div>

                    {/* Customer Email (Dropdown) */}
                    <div className="mb-3">
                        <select
                            value={email}
                            onChange={(e) => handleCustomerSelect(e.target.value)}
                            className="w-full p-1 font-bold border border-[#432e32] rounded bg-amber-50 focus:outline-none shadow-md shadow-[#7e6868]"
                            required
                        >
                            <option value="">Select Customer</option>
                            {customers.map((customer) => (
                                <option key={customer.customer_id} value={customer.customer_email}>
                                    {customer.customer_email}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Item Name (Dropdown) */}
                    <div className="mb-3">
                        <select
                            value={itemName}
                            onChange={(e) => handleItemSelect(e.target.value)}
                            className="w-full p-1 font-bold border border-[#432e32] rounded bg-amber-50 focus:outline-none shadow-md shadow-[#7e6868]"
                            required
                        >
                            <option value="">Select Item</option>
                            {flowers.map((flower) => (
                                <option key={flower.flower_code} value={flower.flower_name}>
                                    {flower.flower_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Customer Name */}
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Customer Name"
                            value={customerName}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            readOnly
                        />
                    </div>

                    {/* Quantity on Hand */}
                    <div className="mb-3">
                        <input
                            type="number"
                            placeholder="Qty on Hand"
                            value={qtyOnHand || ""}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            readOnly
                        />
                    </div>

                    {/* Address */}
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Address"
                            value={address}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            readOnly
                        />
                    </div>

                    {/* Unit Price */}
                    <div className="mb-3">
                        <input
                            type="number"
                            placeholder="Unit Price"
                            value={unitPrice}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            readOnly
                        />
                    </div>

                    {/* Contact */}
                    <div className="mb-3">
                        <input
                            type="number"
                            placeholder="Contact"
                            value={customerPhone}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            readOnly
                        />
                    </div>

                    {/* Quantity to Order */}
                    <div className="mb-3">
                        <input
                            type="number"
                            placeholder="Qty"
                            value={qty || ""}
                            onChange={(e) => setQty(Number(e.target.value))}
                            className="w-full p-1 font-bold border border-[#432e32] rounded bg-amber-50 focus:outline-none shadow-md shadow-[#7e6868]"
                            required
                        />
                    </div>

                    {/* Button Section */}
                    <div className="col-span-2 flex gap-2 mb-2">
                        <button
                            type="button"
                            onClick={handleAddItemToCart}
                            className="w-full h-9 bg-yellow-600 text-black font-bold border-2 border-yellow-600 rounded-lg text-center shadow-lg shadow-[#7e6868] hover:bg-transparent hover:text-black hover:border-black"
                            style={{
                                fontFamily: "'Nunito Sans', sans-serif", // Clean and modern font
                                letterSpacing: "0.5px", // Slight letter spacing for elegance
                            }}
                        >
                            Add to Cart
                        </button>

                        <button
                            type="button"
                            onClick={handleClearForm}
                            className="w-full h-9 bg-pink-900 text-white font-bold border-2 border-pink-900 rounded-lg text-center shadow-lg shadow-[#7e6868] hover:bg-transparent hover:text-black hover:border-black"
                            style={{
                                fontFamily: "'Nunito Sans', sans-serif", // Clean and modern font
                                letterSpacing: "0.5px", // Slight letter spacing for elegance
                            }}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>

            {/* New Place Order Form */}
            <div className="w-1/2 p-4 border-2 border-[#432e32] rounded-lg shadow-md bg-[#bda6a6] mb-2">

                {/* New Form Layout */}
                <form className="grid grid-cols-2 gap-2">

                    {/* Input 1 */}
                    <div className="mb-2">
                        <label className="block mb-2 text-md font-bold text-[#432e32]">Wrapping Chargers</label>
                        <input
                            type="number"
                            className="w-full p-1 border border-[#432e32] rounded bg-amber-50 focus:outline-none shadow-md shadow-[#7e6868]"
                            placeholder="Enter charge"
                            required
                        />
                    </div>

                    {/* Input 2 */}
                    <div className="mb-2">
                        <label className="block mb-2 text-md font-bold text-[#432e32]">Decoration Chargers</label>
                        <input
                            type="number"
                            className="w-full p-1 border border-[#432e32] rounded bg-amber-50 focus:outline-none shadow-md shadow-[#7e6868]"
                            placeholder="Enter charge"
                            required
                        />
                    </div>

                    {/* Input 3 */}
                    <div className="mb-2">
                        <label className="block mb-2 text-md font-bold text-[#432e32]">Sub Total</label>
                        <input
                            type="text"
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            placeholder="Sub Total"
                            readOnly
                        />
                    </div>


                    {/* Input 4 */}
                    <div className="mb-2">
                        <label className="block mb-2 text-md font-bold text-[#432e32]">Paid Amount</label>
                        <input
                            type="text"
                            className="w-full p-1 border border-[#432e32] rounded bg-amber-50 focus:outline-none shadow-md shadow-[#7e6868]"
                            placeholder="Enter cash"
                            required
                        />
                    </div>

                    {/* Input 5 */}
                    <div>
                        <label htmlFor="discount" className="block mb-2 text-md font-bold text-[#432e32]">
                            Discount
                        </label>
                        <select
                            id="discount"
                            className="w-full p-1 border border-[#432e32] text-md rounded bg-amber-50 focus:outline-none shadow-md shadow-[#7e6868]"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                Select discount
                            </option>
                            <option value="5">5%</option>
                            <option value="10">10%</option>
                            <option value="15">15%</option>
                        </select>
                    </div>


                    {/* Input 6 */}
                    <div className="mb-2">
                        <label className="block mb-2 text-md font-bold text-[#432e32]">Balance</label>
                        <input
                            type="text"
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            placeholder="Balance"
                            readOnly
                        />
                    </div>

                    <label className="block mt-1.5 text-md font-bold text-[#432e32]">Total Amount</label>

                    {/* Place Order Buttons */}
                    <div className="col-span-2 flex gap-2">
                        {/* Input 6 */}
                        <input
                            type="text"
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            placeholder="Total Amount"
                            readOnly
                        />
                        <button
                            className="w-full h-9 bg-[#7fd6a6] text-black font-bold border-2 border-[#7fd6a6] rounded-lg text-center shadow-lg shadow-[#7e6868] hover:bg-transparent hover:text-black hover:border-black"
                        >
                            Place Order
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default PlaceOrderFormComponent;