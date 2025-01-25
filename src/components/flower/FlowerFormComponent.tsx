import { useDispatch, useSelector } from "react-redux";
import {forwardRef, useImperativeHandle, useRef, useState} from "react";
import { addFlower, updateFlower } from "../../reducers/FlowerSlice.ts";
import { Flower } from "../../models/flower.ts";
import {toast} from "react-toastify";

interface RootState {
    flower: Flower[];
}

const FlowerFormComponent = forwardRef(({ onCloseModal }: { onCloseModal: () => void }, ref) => {
    const flowers = useSelector((store: RootState) => store.flower);
    const dispatch = useDispatch();

    const [flowerCode, setFlowerCode] = useState<number | undefined>();
    const [flowerName, setFlowerName] = useState<string>("");
    const [previewFlowerImage, setPreviewFlowerImage] = useState<string | null>(null);
    const [flowerQuality, setFlowerQuality] = useState<string>("");
    const [flowerColour, setFlowerColour] = useState<string>("");
    const [flowerSeller, setFlowerSeller] = useState<string>("");

    const [editMode, setEditMode] = useState<boolean>(false);

    const fileInput1Ref = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        editFlower(flower: Flower) {
            setFlowerCode(flower.flower_code);
            setFlowerName(flower.flower_name);
            setFlowerColour(flower.flower_colour);
            setFlowerQuality(flower.flower_quality);
            setFlowerSeller(flower.flower_seller);
            setPreviewFlowerImage(flower.flower_image || null);
            setEditMode(true);
        },
    }));

    const handleFlowerOperation = (type: "ADD_FLOWER" | "UPDATE_FLOWER") => {
        if (!flowerCode || !flowerName || !flowerQuality || !flowerColour || !flowerSeller) {
            toast.error("Please fill out all required fields.", {
                position: "bottom-right",
                autoClose: 2000,
            });
            return;
        }

        const newFlower: Flower = {
            flower_code: flowerCode,
            flower_name: flowerName,
            flower_image: previewFlowerImage || "",
            flower_quality: flowerQuality,
            flower_colour: flowerColour,
            flower_seller: flowerSeller,
        };

        switch (type) {
            case "ADD_FLOWER":
                dispatch(addFlower(newFlower));
                toast.success("Flower saved successfully!", {
                    position: "bottom-right",
                    autoClose: 2000,
                });
                clearForm();
                onCloseModal(); // Close the modal after saving
                break;
            case "UPDATE_FLOWER":
                dispatch(updateFlower(newFlower));
                toast.success("Flower updated successfully!", {
                    position: "bottom-right",
                    autoClose: 2000,
                });
                clearForm();
                setEditMode(false);
                onCloseModal(); // Close the modal after saving
                break;
            default:
                break;
        }
    };

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setPreview: React.Dispatch<React.SetStateAction<string | null>>
    ) => {
        const flower = e.target.files?.[0];
        if (flower) {
            setPreview(URL.createObjectURL(flower));
        }
    };

    const clearForm = () => {
        setFlowerCode(undefined);
        setFlowerName("");
        setFlowerQuality("");
        setFlowerColour("");
        setFlowerSeller("");
        setPreviewFlowerImage(null);
        setEditMode(false);

        if (fileInput1Ref.current) fileInput1Ref.current.value = "";
    };

    const handleSearchByFlowerCode = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const foundFlower = flowers.find((flower: Flower) => flower.flower_code === flowerCode);
            if (foundFlower) {
                setFlowerName(foundFlower.flower_name);
                setFlowerQuality(foundFlower.flower_quality);
                setFlowerColour(foundFlower.flower_colour);
                setFlowerSeller(foundFlower.flower_seller);
                setPreviewFlowerImage(foundFlower.flower_image || null);
                setEditMode(true);
            } else {
                alert("Flower not found.");
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
                        <label htmlFor="flower_code" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Code
                        </label>
                        <input
                            type="text"
                            id="flower_code"
                            value={flowerCode || ""}
                            onChange={(e) => setFlowerCode(Number(e.target.value))}
                            onKeyDown={handleSearchByFlowerCode}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="01"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="flower_name" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Name
                        </label>
                        <input
                            type="text"
                            id="flower_name"
                            value={flowerName}
                            onChange={(e) => setFlowerName(e.target.value)}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="Rose"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="flower_colour" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Colour
                        </label>
                        <input
                            type="text"
                            id="flower_colour"
                            value={flowerColour}
                            onChange={(e) => setFlowerColour(e.target.value)}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="White"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="flower_quality" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Quality
                        </label>
                        <select
                            id="flower_quality"
                            className="w-full p-1 border border-[#432e32] text-md rounded bg-gray-100 focus:outline-none shadow-md"
                            value={flowerQuality}
                            onChange={(e) => setFlowerQuality(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                select the quality
                            </option>
                            <option value="Premium">Premium</option>
                            <option value="Average">Average</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="flower_seller" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Seller
                        </label>
                        <input
                            type="text"
                            id="flower_seller"
                            value={flowerSeller}
                            onChange={(e) => setFlowerSeller(e.target.value)}
                            className="w-full p-1 border border-[#432e32] rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="Flocky Flowers"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="flower_image" className="block mb-2 text-sm font-bold text-[#432e32]">
                            Image
                        </label>
                        <input
                            type="file"
                            id="flower_image"
                            ref={fileInput1Ref}
                            onChange={(e) => handleImageChange(e, setPreviewFlowerImage)}
                            className="w-full p-1.5 text-xs border border-[#432e32] rounded bg-gray-100 shadow-md"
                            accept="image/*"
                        />
                        {previewFlowerImage && (
                            <img src={previewFlowerImage} alt="Preview" className="mt-2 h-20"/>
                        )}
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 mx-20 mt-5 mb-3">
                    <button
                        type="button"
                        onClick={() => handleFlowerOperation(editMode ? "UPDATE_FLOWER" : "ADD_FLOWER")}
                        className="w-full h-9 bg-yellow-600 text-black font-bold border-2 border-yellow-600 rounded-lg text-center shadow-lg hover:bg-transparent hover:text-black hover:border-black"
                        style={{
                            fontFamily: "'Nunito Sans', sans-serif", // Clean and modern font
                            letterSpacing: "0.5px", // Slight letter spacing for elegance
                        }}
                    >
                        {editMode ? "Update Flower" : "Add Flower"}
                    </button>
                    <button
                        type="button"
                        onClick={() => clearForm()}
                        className="w-full h-9 bg-pink-900 text-white font-bold border-2 border-pink-900 rounded-lg text-center shadow-lg hover:bg-transparent hover:text-black hover:border-black"
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

export default FlowerFormComponent;
