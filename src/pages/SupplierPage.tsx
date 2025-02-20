import {Supplier} from "../models/supplier.ts";
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import SupplierFormComponent from "../components/supplier/SupplierFormComponent.tsx";
import SupplierTableComponent from "../components/supplier/SupplierTableComponent.tsx";

interface RootState {
    supplier: Supplier[];
}

const SupplierPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchCode, setSearchCode] = useState<number | undefined>();
    const supplierFormRef = useRef<any>(null); // Reference for SupplierFormComponent
    const suppliers = useSelector((store: RootState) => store.supplier); // Access suppliers from Redux

    const openModal = () => {
        setIsModalOpen(true);
        const nextSupplierId = suppliers.length + 1; // Generate the next flower code
        setTimeout(() => {
            if (supplierFormRef.current) {
                supplierFormRef.current.setNewSupplierId(nextSupplierId); // Pass the generated code
            } else {
                console.error("supplierFormRef is null.");
            }
        }, 0);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEditSupplier = (supplier: Supplier) => {
        openModal();
        setTimeout(() => {
            if (supplierFormRef.current) {
                supplierFormRef.current.editSupplier(supplier);
            } else {
                console.error("supplierFormRef is null after opening modal");
            }
        }, 0);
    };

    const handleSearch = () => {
        if (!searchCode) {
            toast.error("Please enter a supplier id to search.", {
                position: "bottom-right",
                autoClose: 2000,
            });
            return;
        }

        const foundSupplier = suppliers.find((supplier: Supplier) => supplier.supplier_id === searchCode);

        if (foundSupplier) {
            openModal();
            setTimeout(() => {
                if (supplierFormRef.current) {
                    supplierFormRef.current.editSupplier(foundSupplier);
                }
            }, 0);
        } else {
            toast.error("Supplier not found!", {
                position: "bottom-right",
                autoClose: 2000,
            });
        }
    };

    return (
        <div className="relative p-3">
            {/* Search and Add New Buttons */}
            <div className="mb-3 flex items-center justify-between">
                {/* Search Field */}
                <div className="flex items-center">
                    <input
                        type="text"
                        value={searchCode || ""}
                        onChange={(e) => setSearchCode(Number(e.target.value))}
                        placeholder="Enter id to search..."
                        className="w-full max-w-xs px-10 py-1 border-2 border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#432e32]"
                    />
                    <button
                        onClick={handleSearch}
                        className="ml-2 bg-[#ccb7b7] text-black font-extrabold px-6 py-1 rounded-sm shadow-lg shadow-[#432e32] transition-colors hover:bg-gray-100"
                    >
                        Search
                    </button>
                </div>

                {/* Add New Button */}
                <button
                    onClick={openModal}
                    className="bg-yellow-500 text-black font-extrabold px-4 py-2 rounded-md shadow-lg shadow-[#432e32] transition-colors hover:bg-gray-100"
                >
                    Add New +
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div
                        className="bg-[#bda6a6] p-6 rounded-lg shadow-lg relative"
                        style={{
                            width: "70%",
                            maxWidth: "600px",
                            minWidth: "300px",
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-[#432e32] hover:text-black"
                        >
                            ✖
                        </button>
                        {/* Supplier Form */}
                        <SupplierFormComponent ref={supplierFormRef} onCloseModal={closeModal} />
                    </div>
                </div>
            )}

            {/* Table */}
            <div>
                <SupplierTableComponent onEditSupplier={handleEditSupplier} />
            </div>
        </div>
    );
}

export default SupplierPage;