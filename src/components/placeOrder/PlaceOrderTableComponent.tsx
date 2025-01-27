import React from 'react';

const PlaceOrderTableComponent = ({ orders, onDelete }: { orders: any[]; onDelete: (orderId: number) => void }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md bg-white">
            {/* Add gap on top of the table */}
            <div className="mb-4"></div>

            {/* Scrollable Table Container */}
            <div className="overflow-y-auto" style={{ maxHeight: '200px' }}>
                <table className="w-full border-collapse border border-gray-300 mt-2">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">Order ID</th>
                        <th className="border border-gray-300 p-2">Customer Name</th>
                        <th className="border border-gray-300 p-2">Item Name</th>
                        <th className="border border-gray-300 p-2">Quantity</th>
                        <th className="border border-gray-300 p-2">Total</th>
                        <th className="border border-gray-300 p-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.length > 0 ? (
                        orders.map((order, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 p-2">{order.orderId}</td>
                                <td className="border border-gray-300 p-2">{order.customerName}</td>
                                <td className="border border-gray-300 p-2">{order.itemName}</td>
                                <td className="border border-gray-300 p-2">{order.quantity}</td>
                                <td className="border border-gray-300 p-2">{order.total}</td>
                                <td className="border border-gray-300 p-2 text-center">
                                    <button
                                        className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                                        onClick={() => onDelete(order.orderId)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="border border-gray-300 p-2 text-center">
                                No orders found.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Example usage of the component with example data
const ExamplePage = () => {
    const [orders, setOrders] = React.useState([
        { orderId: 1, customerName: "John Doe", itemName: "Rose", quantity: 10, total: 100 },
        { orderId: 2, customerName: "Jane Smith", itemName: "Tulip", quantity: 5, total: 50 },
        { orderId: 3, customerName: "Alice Brown", itemName: "Lily", quantity: 20, total: 200 },
    ]);

    const handleDelete = (orderId: number) => {
        setOrders((prevOrders) => prevOrders.filter((order) => order.orderId !== orderId));
    };

    return <PlaceOrderTableComponent orders={orders} onDelete={handleDelete} />;
};

export default ExamplePage;