import {Flower} from "../../models/flower.ts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteFlower, viewFlowers} from "../../reducers/FlowerSlice.ts";
import ConfirmationModal from "../modals/ConfirmationModal.tsx";
import {toast} from "react-toastify";
import {AppDispatch} from "../../store/Store.ts";

interface RootState {
    flower: Flower[];
}

const FlowerTableComponent = ({onEditFlower,}: { onEditFlower: (flower: Flower) => void; }) => {
    const dispatch = useDispatch<AppDispatch>();
    const flowers = useSelector((store: RootState) => store.flower);

    useEffect(() => {
        dispatch(viewFlowers());
    }, [dispatch]);

    // Modal state
    const [isModalOpen, setModalOpen] = useState(false);
    const [flowerToDelete, setFlowerToDelete] = useState<number | null>(null);

    const openDeleteModal = (flowerCode: number) => {
        setFlowerToDelete(flowerCode);
        setModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (flowerToDelete) {
            dispatch(deleteFlower(flowerToDelete));
            toast.success("Flower deleted successfully!", {
                position: "bottom-right",
                autoClose: 2000,
            });
        }
        setModalOpen(false);
        setFlowerToDelete(null);
    };

    const handleCancelDelete = () => {
        setModalOpen(false);
        setFlowerToDelete(null);
    };

    return (
        <>
            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={isModalOpen}
                title="Confirm Deletion"
                message="Are you sure you want to delete this flower?"
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />

            {/* Table */}
            <div className="mt-7 overflow-y-auto max-h-[420px] border-2 border-black shadow-lg sm:rounded-lg">
                <table
                    className="w-full bg-[#bda6a6] border-collapse">
                    <thead className="sticky top-0 bg-gray-100 text-gray-600 text-xs uppercase tracking-wider z-10">
                    <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider">
                        <th className="px-6 py-3 text-left font-bold">Code</th>
                        <th className="px-6 py-3 text-left font-bold">Name</th>
                        <th className="px-6 py-3 text-left font-bold">Colour</th>
                        <th className="px-6 py-3 text-left font-bold">Size</th>
                        <th className="px-6 py-3 text-left font-bold">Unit Price</th>
                        <th className="px-6 py-3 text-left font-bold">Quantity</th>
                        <th className="px-6 py-3 text-left font-bold">Image</th>
                        <th className="px-6 py-3 text-center font-bold">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {flowers.length > 0 ? (
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
                                            alt="Flower Image"
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
                    )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FlowerTableComponent;