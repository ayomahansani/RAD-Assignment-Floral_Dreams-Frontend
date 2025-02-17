import React from 'react';

interface OrderItem {
    item: string;
    quantity: number;
    unitPrice: number;
    total: number;
}

interface OrderItemsTableProps {
    order_items: OrderItem[];
}

const OrderDetailsTableComponent: React.FC<OrderItemsTableProps> = ({ order_items }) => {

    const total = order_items.reduce((sum, item) => sum + item.total, 0);

    return (
        <>
            {/* Table */}
            <div className="mt-7 overflow-y-auto max-h-[420px] border-2 border-black shadow-lg sm:rounded-lg">
                <table
                    className="w-full bg-[#bda6a6] border-collapse">
                    <thead className="sticky top-0 bg-gray-100 text-gray-600 text-xs uppercase tracking-wider z-10">
                    <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider">
                        <th className="px-6 py-3 text-left font-bold">Flower Code</th>
                        <th className="px-6 py-3 text-left font-bold">Quantity</th>
                        <th className="px-6 py-3 text-left font-bold">Unit Price</th>
                        <th className="px-6 py-3 text-left font-bold">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {order_items.length > 0 ? (
                        order_items.map((item, index) => (
                            <tr key={index} className="hover:bg-[#d3c2c2] even:bg-transparent text-gray-700 border-t">
                                <td className="px-6 py-4">{item.item}</td>
                                <td className="px-6 py-4">{item.quantity}</td>
                                <td className="px-6 py-4">${item.unitPrice}</td>
                                <td className="px-6 py-4">${item.total}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                        <td colSpan={4} className="text-center py-4 text-gray-500">
                                No order selected.
                            </td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot className="bg-gray-50">
                    <tr>
                        <td colSpan={3} className="px-6 py-4 text-right text-sm font-medium text-gray-900">Total:</td>
                        <td className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                            ${total}
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default OrderDetailsTableComponent;