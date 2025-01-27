import { useState, useEffect } from "react";

const PlaceOrderFormComponent = ({ onAddOrder }: { onAddOrder: (order: any) => void }) => {
    const [orderId, setOrderId] = useState("");
    const [date, setDate] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [itemName, setItemName] = useState("");
    const [qtyOnHand, setQtyOnHand] = useState<number | undefined>();
    const [qty, setQty] = useState<number | undefined>();
    const [customerNamesList] = useState(["John Doe", "Jane Smith", "Alice Brown"]); // Example names list
    const [itemNamesList] = useState(["Rose", "Tulip", "Lily"]); // Example item names list
    const [orderTotal, setOrderTotal] = useState<number | undefined>(0);

    useEffect(() => {
        // Auto-generate the date
        const currentDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
        setDate(currentDate);
    }, []);

    function clearForm() {

    }

    const handleAddOrder = () => {
        if (!orderId || !customerName || !customerPhone || !name || !address || !email || !itemName || !qty) {
            alert("Please fill all fields!");
            return;
        }

        const newOrder = {
            orderId,
            date,
            customerName,
            customerPhone,
            name,
            address,
            email,
            itemName,
            qtyOnHand,
            qty,
            orderTotal,
        };

        onAddOrder(newOrder);
        clearForm();
    };

    const handleClearForm = () => {
        setOrderId("");
        setCustomerName("");
        setCustomerPhone("");
        setName("");
        setAddress("");
        setEmail("");
        setItemName("");
        setQtyOnHand(undefined);
        setQty(undefined);
        setOrderTotal(0);
    };

    return (
        <div className="flex gap-2">
            {/* Original Order Form */}
            <div className="w-1/2 p-4 border rounded-lg shadow-md bg-white">
                <h2 className="text-lg font-bold mb-4">Place Order</h2>

                <form
                    className="grid grid-cols-2 gap-2"
                    onSubmit={(e) => e.preventDefault()}
                >
                    {/* Order ID */}
                    <div className="mb-2">
                        <input
                            type="text"
                            placeholder="Order ID"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Date */}
                    <div className="mb-2">
                        <input
                            type="text"
                            placeholder="Date"
                            value={date}
                            readOnly
                            className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
                        />
                    </div>

                    {/* Customer Name (Dropdown) */}
                    <div className="mb-2">
                        <select
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Select Customer</option>
                            {customerNamesList.map((name, index) => (
                                <option key={index} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Customer Phone */}
                    <div className="mb-2">
                        <input
                            type="text"
                            placeholder="Customer Phone"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Name */}
                    <div className="mb-2">
                        <input
                            type="text"
                            placeholder="Contact"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Address */}
                    <div className="mb-2">
                        <input
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-2">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Item Name (Dropdown) */}
                    <div className="mb-2">
                        <select
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">Select Item</option>
                            {itemNamesList.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Quantity on Hand */}
                    <div className="mb-2">
                        <input
                            type="number"
                            placeholder="Qty on Hand"
                            value={qtyOnHand || ""}
                            onChange={(e) => setQtyOnHand(Number(e.target.value))}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Quantity to Order */}
                    <div className="mb-2">
                        <input
                            type="number"
                            placeholder="Qty"
                            value={qty || ""}
                            onChange={(e) => setQty(Number(e.target.value))}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Button Section */}
                    <div className="col-span-2 flex gap-2 mb-2">
                        <button
                            onClick={handleAddOrder}
                            className="w-1/2 p-2 bg-blue-500 text-white font-bold rounded"
                        >
                            Add to Cart
                        </button>

                        <button
                            onClick={handleClearForm}
                            className="w-1/2 p-2 bg-gray-500 text-white font-bold rounded"
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>

            {/* New Place Order Form */}
            <div className="w-1/2 p-4 border rounded-lg shadow-md bg-white">
                <h2 className="text-lg font-bold mb-4">Place Order</h2>

                {/* New Form Layout */}
                <form className="grid grid-cols-2 gap-2">
                    {/* Input 1 */}
                    <div className="mb-2">
                        <label className="block">Wrapping chargers</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Input 2 */}
                    <div className="mb-2">
                        <label className="block">Decoration Chargers</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Input 3 */}
                    <div className="mb-2">
                        <label className="block">Sub Total</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Input 4 */}
                    <div className="mb-2">
                        <label className="block">Paid Amount</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Input 5 */}
                    <div className="mb-2">
                        <label className="block">Discount</label>
                        <input
                            type="text"
                            placeholder="Enter Quantity"
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Input 6 */}
                    <div className="mb-2">
                        <label className="block">Balance</label>
                        <input
                            type="text"
                            placeholder="Enter Quantity"
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Place Order Buttons */}
                    <div className="col-span-2 mb-2 flex gap-2">
                        {/* Input 6 */}
                        <input
                            type="text"
                            placeholder="Total Amount"
                            className="w-full p-2 border rounded"
                        />
                        <button
                            className="w-1/2 p-2 bg-green-500 text-white font-bold rounded"
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