import FlowerFormComponent from "../components/flower/FlowerFormComponent.tsx";
import FlowerTableComponent from "../components/flower/FlowerTableComponent.tsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import {Flower} from "../models/flower.ts";

const FlowerPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const flowers = useSelector((store) => store.flower);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEditFlower = (flower: Flower) => {
        openModal(); // Open the modal for editing
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
                            width: "70%", // Set a narrower width
                            maxWidth: "600px", // Optional: Set a maximum width for larger screens
                            minWidth: "300px", // Optional: Ensure the modal doesn't shrink too much
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
                        <FlowerFormComponent />
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
