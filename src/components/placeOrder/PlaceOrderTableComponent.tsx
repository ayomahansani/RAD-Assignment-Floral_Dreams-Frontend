import {CartItems} from "../../models/cartItems.ts";
import { Trash2 } from "lucide-react";

const PlaceOrderTableComponent = ({ cartItems, onDelete }: { cartItems: CartItems[]; onDelete: (id: number) => void }) => {
    return (

        <div className="mt-7 overflow-y-auto max-h-[200px] border-2 border-black shadow-lg sm:rounded-lg">

            <table
                className="w-full bg-[#bda6a6] border-collapse">
                <thead className="sticky top-0 bg-gray-100 text-gray-600 text-xs uppercase tracking-wider z-10">
                <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider">
                    <th className="border border-gray-300 p-2">Item Name</th>
                    <th className="border border-gray-300 p-2">Unit Price</th>
                    <th className="border border-gray-300 p-2">Quantity</th>
                    <th className="border border-gray-300 p-2">Total</th>
                    <th className="border border-gray-300 p-2">Action</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <tr key={item.flowerCode}
                            className="hover:bg-[#d3c2c2] even:bg-transparent text-gray-700 border-t text-center">
                            <td className="p-2">{item.flowerName}</td>
                            <td className="p-2">{`Rs: ${item.flowerUnitPrice.toFixed(2)}`}</td>
                            <td className="p-2">{item.quantity}</td>
                            <td className="p-2 font-bold">{`Rs: ${item.total.toFixed(2)}`}</td>
                            <td className="p-2">
                                <button
                                    className="text-red-700 hover:text-red-800"
                                    onClick={() => onDelete(item.flowerCode)}
                                >
                                    <Trash2 className="h-6 w-6"/>
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