
const PlaceOrderTableComponent = ({ orders, onDelete }: { orders: any[]; onDelete: (orderId: number) => void }) => {
    return (

        <div className="overflow-y-auto bg-[#bda6a6]" style={{maxHeight: '210px'}}>

                <table
                    className="min-w-full bg-[#bda6a6] border-collapse border-2 border-black shadow-lg sm:rounded-lg">
                    <thead>
                    <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider">
                        <th className="border border-gray-300 p-2">Item Name</th>
                        <th className="border border-gray-300 p-2">Unit Price</th>
                        <th className="border border-gray-300 p-2">Quantity</th>
                        <th className="border border-gray-300 p-2">Total</th>
                        <th className="border border-gray-300 p-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.length > 0 ? (
                        orders.map((order, index) => (
                            <tr key={index} className="hover:bg- even:bg-transparent text-gray-700 border-t text-center" >
                                <td className="p-2">{order.orderId}</td>
                                <td className="p-2">{order.customerName}</td>
                                <td className="p-2">{order.itemName}</td>
                                <td className="p-2">{order.quantity}</td>
                                <td className="p-2">{order.total}</td>
                                <td className="p-2">
                                    <button
                                        className="px-5 py-2 text-xs font-bold text-white bg-black rounded hover:bg-gray-900 shadow-md"
                                        onClick={() => onDelete(order.orderId)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="text-center py-4 text-gray-500">
                                No items added.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

    );

};


export default PlaceOrderTableComponent;