/*
import FlowerFormComponent from "../components/flower/FlowerFormComponent.tsx";
import FlowerTableComponent from "../components/flower/FlowerTableComponent.tsx";
import {useRef, useState} from "react";
import {Flower} from "../models/flower.ts";

const FlowerPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            {/!* Search and Add New Buttons *!/}
            <div className="mb-3 flex items-center justify-between">
                {/!* Search Field *!/}
                <div className="flex items-center">
                    <input
                        type="text"
                        /!*value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}*!/
                        placeholder="Enter code to search..."
                        className="w-full max-w-xs px-10 py-1 border-2 border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md shadow-[#432e32]"
                    />
                    <button
                        /!*onClick={handleSearch}*!/
                        className="ml-2 bg-[#ccb7b7] text-black font-extrabold px-6 py-1 rounded-sm shadow-lg shadow-[#432e32] transition-colors hover:bg-gray-100"
                    >
                        Search
                    </button>
                </div>

                {/!* Add New Button *!/}
                <button
                    onClick={openModal}
                    className="bg-yellow-500 text-black font-extrabold px-4 py-2 rounded-md shadow-lg shadow-[#432e32] transition-colors hover:bg-gray-100"
                >
                    Add New +
                </button>
            </div>

            {/!* Modal *!/}
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
                        {/!* Close Button *!/}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-[#432e32] hover:text-black"
                        >
                            ✖
                        </button>
                        {/!* Flower Form *!/}
                        <FlowerFormComponent ref={flowerFormRef} onCloseModal={closeModal} />
                    </div>
                </div>
            )}

            {/!* Table *!/}
            <div>
                <FlowerTableComponent
                    onEditFlower={handleEditFlower}
                />
            </div>
        </div>
    );
};

export default FlowerPage;
*/

import FlowerFormComponent from "../components/flower/FlowerFormComponent.tsx";
import FlowerTableComponent from "../components/flower/FlowerTableComponent.tsx";
import { useRef, useState } from "react";
import { Flower } from "../models/flower.ts";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface RootState {
    flower: Flower[];
}

const FlowerPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchCode, setSearchCode] = useState<number | undefined>();
    const flowerFormRef = useRef<any>(null); // Reference for FlowerFormComponent
    const flowers = useSelector((store: RootState) => store.flower); // Access flowers from Redux

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEditFlower = (flower: Flower) => {
        openModal();
        setTimeout(() => {
            if (flowerFormRef.current) {
                flowerFormRef.current.editFlower(flower);
            } else {
                console.error("flowerFormRef is null after opening modal");
            }
        }, 0);
    };

    const handleSearch = () => {
        if (!searchCode) {
            toast.error("Please enter a flower code to search.", {
                position: "bottom-right",
                autoClose: 2000,
            });
            return;
        }

        const foundFlower = flowers.find((flower: Flower) => flower.flower_code === searchCode);

        if (foundFlower) {
            openModal();
            setTimeout(() => {
                if (flowerFormRef.current) {
                    flowerFormRef.current.editFlower(foundFlower);
                }
            }, 0);
        } else {
            toast.error("Flower not found!", {
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
                        placeholder="Enter code to search..."
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
                        {/* Flower Form */}
                        <FlowerFormComponent ref={flowerFormRef} onCloseModal={closeModal} />
                    </div>
                </div>
            )}

            {/* Table */}
            <div>
                <FlowerTableComponent onEditFlower={handleEditFlower} />
            </div>
        </div>
    );
};

export default FlowerPage;

