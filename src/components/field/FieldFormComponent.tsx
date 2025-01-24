import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { Field } from "../../models/field.ts";
import { addField, updateField } from "../../reducers/FieldSlice.ts";
import FieldTableComponent from "./FieldTableComponent.tsx";

// Define the shape of the store
interface RootState {
    field: Field[];
}

const FieldFormComponent = () => {
    const fields = useSelector((store: RootState) => store.field); // Updated useSelector with correct type
    const dispatch = useDispatch();

    const [fieldCode, setFieldCode] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [fieldLocation, setFieldLocation] = useState("");
    const [fieldExtentSize, setFieldExtentSize] = useState<number | "">("");
    const [previewImage1, setPreviewImage1] = useState<string | null>(null);
    const [previewImage2, setPreviewImage2] = useState<string | null>(null);

    const [editMode, setEditMode] = useState(false);

    const fileInput1Ref = useRef<HTMLInputElement>(null);
    const fileInput2Ref = useRef<HTMLInputElement>(null);

    const handleFieldOperation = (type: string) => {
        if (!fieldCode || !fieldName || !fieldLocation || !fieldExtentSize) {
            alert("Please fill out all required fields.");
            return;
        }

        const newField: Field = {
            field_code: fieldCode,
            field_name: fieldName,
            field_location: fieldLocation,
            field_extent_size: Number(fieldExtentSize),
            field_image1: previewImage1 || "",
            field_image2: previewImage2 || "",
        };

        switch (type) {
            case "ADD_FIELD":
                dispatch(addField(newField));
                clearForm();
                break;
            case "UPDATE_FIELD":
                dispatch(updateField(newField));
                clearForm();
                setEditMode(false);
                break;
            default:
                break;
        }
    };

    const handleEditField = (field: Field) => {
        setFieldCode(field.field_code);
        setFieldName(field.field_name);
        setFieldLocation(field.field_location);
        setFieldExtentSize(field.field_extent_size);
        setPreviewImage1(field.field_image1 || null);
        setPreviewImage2(field.field_image2 || null);
        setEditMode(true);
    };

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setPreview: React.Dispatch<React.SetStateAction<string | null>>
    ) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const clearForm = () => {
        setFieldCode("");
        setFieldName("");
        setFieldLocation("");
        setFieldExtentSize("");
        setPreviewImage1(null);
        setPreviewImage2(null);
        setEditMode(false);

        // Clear file input fields
        if (fileInput1Ref.current) fileInput1Ref.current.value = "";
        if (fileInput2Ref.current) fileInput2Ref.current.value = "";
    };

    const handleSearchByFieldCode = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const foundField = fields.find((field: Field) => field.field_code === fieldCode);
            if (foundField) {
                setFieldName(foundField.field_name);
                setFieldLocation(foundField.field_location);
                setFieldExtentSize(foundField.field_extent_size);
                setPreviewImage1(foundField.field_image1 || null);
                setPreviewImage2(foundField.field_image2 || null);
            } else {
                alert("Field not found.");
            }
        }
    };

    return (
        <>
            <form className="mx-1 mt-0 p-3 rounded-lg border-2 border-black shadow-lg bg-[#bda6a6]">
                <div className="grid gap-6 mb-6 md:grid-cols-3">
                    <div>
                        <label htmlFor="field_code" className="block mb-2 text-sm font-bold text-gray-700">
                            Field Code
                        </label>
                        <input
                            type="text"
                            id="field_code"
                            value={fieldCode}
                            onChange={(e) => setFieldCode(e.target.value)}
                            onKeyDown={handleSearchByFieldCode}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="F123"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="field_name" className="block mb-2 text-sm font-bold text-gray-700">
                            Field Name
                        </label>
                        <input
                            type="text"
                            id="field_name"
                            value={fieldName}
                            onChange={(e) => setFieldName(e.target.value)}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="Main Field"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block mb-2 text-sm font-bold text-gray-700">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            value={fieldLocation}
                            onChange={(e) => setFieldLocation(e.target.value)}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="City"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="field_size" className="block mb-2 text-sm font-bold text-gray-700">
                            Field Size
                        </label>
                        <input
                            type="number"
                            id="field_size"
                            value={fieldExtentSize}
                            onChange={(e) => setFieldExtentSize(Number(e.target.value))}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="100"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="field_image1" className="block mb-2 text-sm font-bold text-gray-700">
                            Field Image 1
                        </label>
                        <input
                            type="file"
                            id="field_image1"
                            ref={fileInput1Ref}
                            onChange={(e) => handleImageChange(e, setPreviewImage1)}
                            className="w-full p-1.5 text-xs border border-green-800 rounded bg-gray-100 shadow-md"
                            accept="image/*"
                        />
                        {previewImage1 && <img src={previewImage1} alt="Preview 1" className="mt-2 h-20" />}
                    </div>
                    <div>
                        <label htmlFor="field_image2" className="block mb-2 text-sm font-bold text-gray-700">
                            Field Image 2
                        </label>
                        <input
                            type="file"
                            id="field_image2"
                            ref={fileInput2Ref}
                            onChange={(e) => handleImageChange(e, setPreviewImage2)}
                            className="w-full p-1.5 text-xs border border-green-800 rounded bg-gray-100 shadow-md"
                            accept="image/*"
                        />
                        {previewImage2 && <img src={previewImage2} alt="Preview 2" className="mt-2 h-20" />}
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 mx-20 mt-4">
                    <button
                        type="button"
                        onClick={() => handleFieldOperation(editMode ? "UPDATE_FIELD" : "ADD_FIELD")}
                        className="w-full text-white bg-black hover:bg-transparent hover:text-black hover:border-2 hover:border-black font-bold rounded-lg text-sm px-5 py-2 text-center shadow-md"
                    >
                        {editMode ? "Update Field" : "Add Field"}
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

            <FieldTableComponent fields={fields} onEditField={handleEditField} />
        </>
    );
};

export default FieldFormComponent;
