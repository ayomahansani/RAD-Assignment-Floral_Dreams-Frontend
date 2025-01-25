import {Flower} from "../../models/flower.ts";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {deleteFlower} from "../../reducers/FlowerSlice.ts";
import ConfirmationModal from "../modals/ConfirmationModal.tsx";
import {toast} from "react-toastify";


const FlowerTableComponent = ({flowers = [], onEditFlower,}: {
    flowers?: Flower[];
    onEditFlower: (flower: Flower) => void;
}) => {
    const dispatch = useDispatch();

    // Modal state
    const [isModalOpen, setModalOpen] = useState(false);
    const [flowerToDelete, setFlowerToDelete] = useState<number | null>(null);

    const openDeleteModal = (fieldCode: number) => {
        setFlowerToDelete(fieldCode);
        setModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (flowerToDelete) {
            dispatch(deleteFlower({ flower_code: flowerToDelete }));
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
            <table className="mt-7 min-w-full bg-[#bda6a6] border-collapse border-2 border-black shadow-lg sm:rounded-lg">
                <thead>
                <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider">
                    <th className="px-6 py-3 text-left font-bold">Code</th>
                    <th className="px-6 py-3 text-left font-bold">Name</th>
                    <th className="px-6 py-3 text-left font-bold">Colour</th>
                    <th className="px-6 py-3 text-left font-bold">Quality</th>
                    <th className="px-6 py-3 text-left font-bold">Seller</th>
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
                            <td className="px-6 py-4">{flower.flower_quality}</td>
                            <td className="px-6 py-4">{flower.flower_seller}</td>
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
                        <td colSpan={7} className="text-center py-4 text-gray-500">
                            No flowers available.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
};

export default FlowerTableComponent;