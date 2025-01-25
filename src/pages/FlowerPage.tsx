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
                        <FlowerFormComponent/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlowerPage;