import {Supplier} from "../../models/supplier.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/Store.ts";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import ConfirmationModal from "../modals/ConfirmationModal.tsx";
import {deleteSupplier, viewSuppliers} from "../../reducers/SupplierSlice.ts";
import {Flower} from "../../models/flower.ts";

interface RootState {
    supplier: Supplier[];
    flower: Flower[];
}

const SupplierTableComponent = ({onEditSupplier}: {onEditSupplier: (supplier: Supplier) => void}) => {

    const dispatch = useDispatch<AppDispatch>();
    const suppliers = useSelector((store: RootState) => store.supplier);
    const flowers = useSelector((store: RootState) => store.flower);

    useEffect(() => {
        dispatch(viewSuppliers());
    }, [dispatch]);

    // Modal state
    const [isModalOpen, setModalOpen] = useState(false);
    const [supplierToDelete, setSupplierToDelete] = useState<number | null>(null);

    const openDeleteModal = (supplierId: number) => {
        setSupplierToDelete(supplierId);
        setModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (supplierToDelete) {
            dispatch(deleteSupplier(supplierToDelete));
            toast.success("Supplier deleted successfully!", {
                position: "bottom-right",
                autoClose: 2000,
            });
        }
        setModalOpen(false);
        setSupplierToDelete(null);
    };

    const handleCancelDelete = () => {
        setModalOpen(false);
        setSupplierToDelete(null);
    };

    return (
        <>
            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={isModalOpen}
                title="Confirm Deletion"
                message="Are you sure you want to delete this supplier?"
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
            />

            {/* Table */}
            <div className="mt-7 overflow-y-auto max-h-[420px] border-2 border-black shadow-lg sm:rounded-lg">
                <table
                    className="w-full bg-[#bda6a6] border-collapse">
                    <thead className="sticky top-0 bg-gray-100 text-gray-600 text-xs uppercase tracking-wider z-10">
                    <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider">
                        <th className="px-6 py-3 text-left font-bold">Id</th>
                        <th className="px-6 py-3 text-left font-bold">Name</th>
                        <th className="px-6 py-3 text-left font-bold">Contact</th>
                        <th className="px-6 py-3 text-left font-bold">Email</th>
                        <th className="px-6 py-3 text-left font-bold">Address</th>
                        <th className="px-6 py-3 text-left font-bold">Provided Flowers</th>
                        <th className="px-6 py-3 text-center font-bold">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {suppliers.length > 0 ? (
                        suppliers.map((supplier: Supplier, index: number) => (
                            <tr
                                key={index}
                                className="hover:bg-[#d3c2c2] even:bg-transparent text-gray-700 border-t"
                            >
                                <td className="px-6 py-4">{supplier.supplier_id}</td>
                                <td className="px-6 py-4">{supplier.supplier_name}</td>
                                <td className="px-6 py-4">{supplier.supplier_phone}</td>
                                <td className="px-6 py-4">{supplier.supplier_email}</td>
                                <td className="px-6 py-4">{supplier.supplier_address}</td>
                                {/*<td className="px-6 py-4">*/}
                                {/*    {supplier.supplied_Flowers*/}
                                {/*        .map(flowerDetail => {*/}
                                {/*            const flower = flowers.find(f => f.flower_code === flowerDetail.flower_code);*/}
                                {/*            return flower ? `${flower.flower_name} (${flower.flower_colour})` : "Unknown Flower";*/}
                                {/*        })*/}
                                {/*        .join(", ")}*/}
                                {/*</td>*/}

                                <td className="px-6 py-4">
                                    {supplier.supplied_Flowers && Array.isArray(supplier.supplied_Flowers) && supplier.supplied_Flowers.length > 0
                                        ? supplier.supplied_Flowers.map(flowerDetail => {
                                            const flower = flowers.find(f => f.flower_code === flowerDetail.flower_code);
                                            return flower ? `${flower.flower_name} - ${flower.flower_colour}` : "Unknown Flower";
                                        }).join(", ")
                                        : "No Flowers Provided"}
                                </td>


                                <td className="px-6 py-4 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => onEditSupplier(supplier)}
                                            className="px-4 py-2 text-xs font-bold text-white bg-pink-900 rounded hover:bg-pink-800 shadow-md"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => openDeleteModal(supplier.supplier_id)}
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
                                No suppliers available.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    );

};

export default SupplierTableComponent;