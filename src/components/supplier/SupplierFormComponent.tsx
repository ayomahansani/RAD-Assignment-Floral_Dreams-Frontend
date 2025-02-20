import {forwardRef, useImperativeHandle, useState} from "react";
import {Supplier} from "../../models/supplier.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/Store.ts";
import {toast} from "react-toastify";
import {saveSupplier, updateSupplier, viewSuppliers} from "../../reducers/SupplierSlice.ts";
import {SuppliersAndFlowersDetails} from "../../models/suppliers&FlowersDetails.ts";
import {Flower} from "../../models/flower.ts";

interface RootState {
    supplier: Supplier[];
    flower: Flower[];
}

const SupplierFormComponent = forwardRef(({ onCloseModal }: { onCloseModal: () => void }, ref) => {

    const suppliers = useSelector((store: RootState) => store.supplier);
    const flowers = useSelector((store: RootState) => store.flower);
    const dispatch = useDispatch<AppDispatch>();

    const [supplierId, setSupplierId] = useState<number | undefined>();
    const [supplierName, setSupplierName] = useState<string>("");
    const [supplierPhone, setSupplierPhone] = useState<string>("");
    const [supplierEmail, setSupplierEmail] = useState<string>("");
    const [supplierAddress, setSupplierAddress] = useState<string>("");
    const [selectedFlowers, setSelectedFlowers] = useState<SuppliersAndFlowersDetails[]>([]);

    const [editMode, setEditMode] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
        editSupplier(supplier: Supplier) {
            setSupplierId(supplier.supplier_id);
            setSupplierName(supplier.supplier_name);
            setSupplierPhone(supplier.supplier_phone);
            setSupplierEmail(supplier.supplier_email);
            setSupplierAddress(supplier.supplier_address);
            setSelectedFlowers(supplier.supplied_Flowers || []); // Corrected
            setEditMode(true);
        },
        setNewSupplierId(newId: number) {
            clearForm(); // Clear other fields
            setSupplierId(newId);
        },
    }));

    const handleFlowerSelection = (flower: Flower) => {
        setSelectedFlowers((prevSelected) => {
            const exists = prevSelected.find((f) => f.flower_code === flower.flower_code);

            if (exists) {
                return prevSelected.filter((f) => f.flower_code !== flower.flower_code);
            } else {
                return [...prevSelected, { supplier_id: supplierId || 0, flower_code: flower.flower_code, flower_qty_on_hand: flower.flower_qty_on_hand }];
            }
        });
    };

    const handleSupplierOperation = (type: "ADD_SUPPLIER" | "UPDATE_SUPPLIER") => {
        if (!supplierId || !supplierName || !supplierPhone || !supplierEmail || !supplierAddress || !selectedFlowers) {
            toast.error("Please fill out all required fields.", {
                position: "bottom-right",
                autoClose: 2000,
            });
            return;
        }

        const newSupplier: Supplier = {
            supplier_id: supplierId,
            supplier_name: supplierName,
            supplier_phone: supplierPhone,
            supplier_email: supplierEmail,
            supplier_address: supplierAddress,
            supplied_Flowers: selectedFlowers,
        }

        switch (type) {
            case "ADD_SUPPLIER":
                dispatch(saveSupplier(newSupplier)).then(() => {
                    // After saving, optimistically update the suppliers state in the component
                    dispatch(viewSuppliers()); // This will refetch suppliers from the store
                    toast.success("Supplier saved successfully!", {
                        position: "bottom-right",
                        autoClose: 2000,
                    });
                });
                clearForm();
                onCloseModal();
                break;
            case "UPDATE_SUPPLIER":
                dispatch(updateSupplier(newSupplier)).then(() => {
                    dispatch(viewSuppliers()); // Refetch suppliers to reflect the changes
                    toast.success("Supplier updated successfully!", {
                        position: "bottom-right",
                        autoClose: 2000,
                    });
                });
                clearForm();
                setEditMode(false);
                onCloseModal();
                break;
            default:
                break;
        }
    };

    const clearForm = () => {
        setSupplierId(undefined);
        setSupplierName("");
        setSupplierPhone("");
        setSupplierEmail("");
        setSupplierAddress("");
        setSelectedFlowers([]);
        setEditMode(false);
    };

    const handleSearchBySupplierId = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const foundSupplier = suppliers.find((supplier: Supplier) => supplier.supplier_id === supplierId);
            if (foundSupplier) {
                setSupplierId(foundSupplier.supplier_id);
                setSupplierName(foundSupplier.supplier_name);
                setSupplierPhone(foundSupplier.supplier_phone);
                setSupplierEmail(foundSupplier.supplier_email);
                setSupplierAddress(foundSupplier.supplier_address);
                setSelectedFlowers(foundSupplier.supplied_Flowers || []); // Corrected
                setEditMode(true);
            } else {
                toast.error("Supplier not found!", {
                    position: "bottom-right",
                    autoClose: 2000,
                });
            }
        }
    };

    return (
        <>
            <form
                className="mx-auto mt-0 p-3 rounded-lg border-2 border-[#432e32] shadow-lg bg-[#bda6a6]"
                style={{
                    width: "100%", // Adjust form width
                    maxWidth: "600px", // Set a maximum width for responsiveness
                }}
            >
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="customer_id" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Id
                        </label>
                        <input
                            type="text"
                            id="supplier_id"
                            value={supplierId || ""}
                            onChange={(e) => setSupplierId(Number(e.target.value))}
                            onKeyDown={handleSearchBySupplierId}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            placeholder="01"
                            readOnly
                        />
                    </div>
                    <div>
                        <label htmlFor="customer_firstName" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Name
                        </label>
                        <input
                            type="text"
                            id="supplier_name"
                            value={supplierName}
                            onChange={(e) => setSupplierName(e.target.value)}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            placeholder="Lassana Flora"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="customer_phone" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Contact
                        </label>
                        <input
                            type="text"
                            id="supplier_phone"
                            value={supplierPhone}
                            onChange={(e) => setSupplierPhone(e.target.value)}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            placeholder="0750443789"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="customer_email" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Email
                        </label>
                        <input
                            type="email"
                            id="supplier_email"
                            value={supplierEmail}
                            onChange={(e) => setSupplierEmail(e.target.value)}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            placeholder="flora@gmail.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="customer_address" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Address
                        </label>
                        <input
                            type="text"
                            id="supplier_address"
                            value={supplierAddress}
                            onChange={(e) => setSupplierAddress(e.target.value)}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#7e6868]"
                            placeholder="Gampaha"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="supplied_flowers" className="block mb-2 text-sm font-bold text-[#432e32]">
                        Select Flower/s
                    </label>
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 border rounded p-2 overflow-y-scroll max-h-[110px]">
                        {flowers.map((flower) => (
                            <div key={flower.flower_code} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id={`flower-${flower.flower_code}`}
                                    checked={selectedFlowers.some(f => f.flower_code === flower.flower_code)}
                                    onChange={() => handleFlowerSelection(flower)}
                                />
                                <label htmlFor={`flower-${flower.flower_code}`}
                                       className="text-sm text-black">{flower.flower_name} - {flower.flower_colour}</label>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="grid gap-5 md:grid-cols-2 mx-20 mt-5 mb-3">
                    <button
                        type="button"
                        onClick={() => handleSupplierOperation(editMode ? "UPDATE_SUPPLIER" : "ADD_SUPPLIER")}
                        className="w-full h-9 bg-yellow-600 text-black font-bold border-2 border-yellow-600 rounded-lg text-center shadow-lg shadow-[#7e6868] hover:bg-transparent hover:text-black hover:border-black"
                        style={{
                            fontFamily: "'Nunito Sans', sans-serif", // Clean and modern font
                            letterSpacing: "0.5px", // Slight letter spacing for elegance
                        }}
                    >
                        {editMode ? "Update Supplier" : "Add Supplier"}
                    </button>
                    <button
                        type="button"
                        onClick={() => clearForm()}
                        className="w-full h-9 bg-pink-900 text-white font-bold border-2 border-pink-900 rounded-lg text-center shadow-lg shadow-[#7e6868] hover:bg-transparent hover:text-black hover:border-black"
                        style={{
                            fontFamily: "'Nunito Sans', sans-serif", // Clean and modern font
                            letterSpacing: "0.5px", // Slight letter spacing for elegance
                        }}
                    >
                        Clear
                    </button>
                </div>
            </form>
        </>
    );

});

export default SupplierFormComponent;