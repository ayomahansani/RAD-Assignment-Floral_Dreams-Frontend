import FlowerFormComponent from "../components/flower/FlowerFormComponent.tsx";
import FlowerTableComponent from "../components/flower/FlowerTableComponent.tsx";
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import {Flower} from "../models/flower.ts";

const FlowerPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const flowers = useSelector((store) => store.flower);

    // Reference to call `editFlower` in FlowerFormComponent
    const flowerFormRef = useRef<any>(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEditFlower = (flower: Flower) => {
        // Open the modal first
        openModal();

        // Delay the call to ensure FlowerFormComponent is rendered
        setTimeout(() => {
            if (flowerFormRef.current) {
                flowerFormRef.current.editFlower(flower); // Call the edit function
            } else {
                console.error("flowerFormRef is null after opening modal");
            }
        }, 0);
    };

    return (
        <div className="relative p-3">
            {/* Add New Button */}
            <div className="mb-3 text-right">
                <button
                    onClick={openModal}
                    className="bg-yellow-500 text-black font-extrabold px-4 py-2 rounded-md shadow-lg transition-colors"
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
                        {/* Flower Form */}
                        <FlowerFormComponent ref={flowerFormRef} />
                    </div>
                </div>
            )}

            {/* Table */}
            <div>
                <FlowerTableComponent
                    flowers={flowers}
                    onEditFlower={handleEditFlower}
                />
            </div>
        </div>
    );
};

export default FlowerPage;
