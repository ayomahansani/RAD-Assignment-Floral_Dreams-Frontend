import { useState } from "react";
import PlaceOrderFormComponent from "../components/placeOrder/PlaceOrderFormComponent.tsx";
import PlaceOrderTableComponent from "../components/placeOrder/PlaceOrderTableComponent.tsx";
import { CartItems } from "../models/cartItems.ts";

const PlaceOrderPage = () => {
    const [cartItems, setCartItems] = useState<CartItems[]>([]);

    const handleAddItems = (newOrder: CartItems) => {
        setCartItems((prevOrders) => {
            const existingItem = prevOrders.find(
                (item) => item.flowerCode === newOrder.flowerCode
            );

            if (existingItem) {
                // Update the quantity and total for the existing item
                return prevOrders.map((item) =>
                    item.flowerCode === newOrder.flowerCode
                        ? {
                            ...item,
                            quantity: item.quantity + newOrder.quantity,
                            total: item.total + newOrder.total,
                        }
                        : item
                );
            } else {
                // Add new item to the cart
                return [...prevOrders, newOrder];
            }
        });
    };


    const handleDeleteItem = (flowerCode: number) => {
        setCartItems((prevOrders) =>
            prevOrders.filter((item) => item.flowerCode !== flowerCode)
        );
    };

    // Calculate subtotal
    const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);

    return (
        <div className="p-2">
            {/* Forms Section */}
            <PlaceOrderFormComponent
                onAddItem={handleAddItems}
                subtotal={subtotal}
                cartItems={cartItems}
            />

            {/* Add gap between the form and table */}
            <div className="my-5"></div> {/* Vertical margin for gap */}

            {/* Table Section */}
            <PlaceOrderTableComponent
                cartItems={cartItems}
                onDelete={handleDeleteItem}
            />
        </div>
    );
};

export default PlaceOrderPage;
