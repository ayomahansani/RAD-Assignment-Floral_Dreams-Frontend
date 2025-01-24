import FlowerFormComponent from "../components/flower/FlowerFormComponent.tsx";
import {useState} from "react";

const FlowerPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative p-4">
            {/* Add New Button */}
            <div className="absolute top-1 right-4">
                <button
                    onClick={openModal}
                    className="bg-black text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
                >
                    Add New +
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-4xl relative">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        >
                            ✖
                        </button>
                        {/* Flower Form */}
                        <FlowerFormComponent />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlowerPage;