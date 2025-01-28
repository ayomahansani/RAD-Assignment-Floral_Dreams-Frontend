import { useState } from "react";
import PlaceOrderFormComponent from "../components/placeOrder/PlaceOrderFormComponent.tsx";
import PlaceOrderTableComponent from "../components/placeOrder/PlaceOrderTableComponent.tsx";

const PlaceOrderPage = () => {
    const [orders, setOrders] = useState<any[]>([]);

    const handleAddOrder = (newOrder: any) => {
        setOrders((prevOrders) => [...prevOrders, newOrder]);
    };

    return (
        <div className="p-2">
            {/* Forms Section */}
            <PlaceOrderFormComponent onAddOrder={handleAddOrder} />

            {/* Add gap between the form and table */}
            <div className="my-5"></div> {/* Vertical margin for gap */}

            {/* Table Section */}
            <PlaceOrderTableComponent orders={orders} />
        </div>
    );
};

export default PlaceOrderPage;