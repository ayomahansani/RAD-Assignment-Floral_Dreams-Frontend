import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { addFlower, updateFlower } from "../../reducers/FlowerSlice.ts";
import { Flower } from "../../models/flower.ts";

interface RootState {
    flower: Flower[];
}

const FlowerFormComponent = () => {
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

    const handleFlowerOperation = (type: "ADD_FLOWER" | "UPDATE_FLOWER") => {
        if (!flowerCode || !flowerName || !flowerQuality || !flowerColour || !flowerSeller) {
            alert("Please fill out all required fields.");
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

        if (type === "ADD_FLOWER") {
            dispatch(addFlower(newFlower));
            clearForm();
        } else if (type === "UPDATE_FLOWER") {
            dispatch(updateFlower(newFlower));
            clearForm();
            setEditMode(false);
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
            <form className="mx-1 mt-0 p-3 rounded-lg border-2 border-black shadow-lg bg-[#bda6a6]">
                <div className="grid gap-6 mb-6 md:grid-cols-3">
                    <div>
                        <label htmlFor="flower_code" className="block mb-2 text-sm font-bold text-gray-700">
                            Code
                        </label>
                        <input
                            type="text"
                            id="flower_code"
                            value={flowerCode || ""}
                            onChange={(e) => setFlowerCode(Number(e.target.value))}
                            onKeyDown={handleSearchByFlowerCode}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="F123"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="flower_name" className="block mb-2 text-sm font-bold text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="flower_name"
                            value={flowerName}
                            onChange={(e) => setFlowerName(e.target.value)}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="Rose"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="flower_colour" className="block mb-2 text-sm font-bold text-gray-700">
                            Colour
                        </label>
                        <input
                            type="text"
                            id="flower_colour"
                            value={flowerColour}
                            onChange={(e) => setFlowerColour(e.target.value)}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="White"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="flower_quality" className="block mb-2 text-sm font-bold text-gray-700">
                            Quality
                        </label>
                        <select
                            id="flower_quality"
                            className="w-full p-1 border border-green-800 text-md rounded bg-gray-100 focus:outline-none shadow-md"
                            value={flowerQuality}
                            onChange={(e) => setFlowerQuality(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                Select the quality
                            </option>
                            <option value="Premium">Premium</option>
                            <option value="Average">Average</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="flower_seller" className="block mb-2 text-sm font-bold text-gray-700">
                            Seller
                        </label>
                        <input
                            type="text"
                            id="flower_seller"
                            value={flowerSeller}
                            onChange={(e) => setFlowerSeller(e.target.value)}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="Flocky Flowers"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="flower_image" className="block mb-2 text-sm font-bold text-gray-700">
                            Image
                        </label>
                        <input
                            type="file"
                            id="flower_image"
                            ref={fileInput1Ref}
                            onChange={(e) => handleImageChange(e, setPreviewFlowerImage)}
                            className="w-full p-1.5 text-xs border border-green-800 rounded bg-gray-100 shadow-md"
                            accept="image/*"
                        />
                        {previewFlowerImage && (
                            <img src={previewFlowerImage} alt="Preview" className="mt-2 h-20" />
                        )}
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 mx-20 mt-4">
                    <button
                        type="button"
                        onClick={() => handleFlowerOperation(editMode ? "UPDATE_FLOWER" : "ADD_FLOWER")}
                        className="w-full text-white bg-black hover:bg-transparent hover:text-black hover:border-2 hover:border-black font-bold rounded-lg text-sm px-5 py-2 text-center shadow-md"
                    >
                        {editMode ? "Update Flower" : "Add Flower"}
                    </button>
                    <button
                        type="button"
                        onClick={() => clearForm()}
                        className="w-full text-white bg-black hover:bg-black border-2 border-green-800 font-bold rounded-lg text-sm px-5 py-2 text-center shadow-md"
                    >
                        Clear
                    </button>
                </div>
            </form>
        </>
    );
};

export default FlowerFormComponent;
