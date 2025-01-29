

const OrderDetailsTableComponent = () => {
    return (
        <>

            {/* Table */}
            <table className="mt-3 min-w-full bg-[#bda6a6] border-collapse border-2 border-black shadow-lg sm:rounded-lg">
                <thead>
                <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider">
                    <th className="px-6 py-3 text-left font-bold">Order Id</th>
                    <th className="px-6 py-3 text-left font-bold">Date</th>
                    <th className="px-6 py-3 text-left font-bold">Customer Name</th>
                    <th className="px-6 py-3 text-left font-bold">Flowers</th>
                    <th className="px-6 py-3 text-left font-bold">Total</th>
                </tr>
                </thead>
                <tbody>
                {/*{flowers.length > 0 ? (
                    flowers.map((flower: Flower, index: number) => (
                        <tr
                            key={index}
                            className="hover:bg- even:bg-transparent text-gray-700 border-t"
                        >
                            <td className="px-6 py-4">{flower.flower_code}</td>
                            <td className="px-6 py-4">{flower.flower_name}</td>
                            <td className="px-6 py-4">{flower.flower_colour}</td>
                            <td className="px-6 py-4">{flower.flower_size}</td>
                            <td className="px-6 py-4">{flower.flower_unit_price}</td>
                            <td className="px-6 py-4">{flower.flower_qty_on_hand}</td>
                            <td className="px-6 py-4">
                                {flower.flower_image ? (
                                    <img
                                        src={flower.flower_image}
                                        alt="Flower Image "
                                        className="h-14 w-14 object-cover rounded"
                                    />
                                ) : (
                                    "No Image"
                                )}
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <button
                                        onClick={() => onEditFlower(flower)}
                                        className="px-4 py-2 text-xs font-bold text-white bg-pink-900 rounded hover:bg-pink-800 shadow-md"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => openDeleteModal(flower.flower_code)}
                                        className="px-4 py-2 text-xs font-bold text-white bg-black rounded hover:bg-gray-900 shadow-md"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={8} className="text-center py-4 text-gray-500">
                            No flowers available.
                        </td>
                    </tr>
                )}*/}
                <tr>
                    <td colSpan={5} className="text-center py-4 text-gray-500">
                        No orders available.
                    </td>
                </tr>
                </tbody>
            </table>

        </>
    );
};

export default OrderDetailsTableComponent;