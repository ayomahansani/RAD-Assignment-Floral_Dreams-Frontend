import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Vehicle} from "../../models/vehicle.ts";
import {addVehicle, deleteVehicle, updateVehicle} from "../../reducers/VehicleSlice.ts";
import VehicleTableComponent from "./VehicleTableComponent.tsx";


const VehicleFormComponent = () => {

    const vehicles = useSelector((store)=> store.vehicle);
    const dispatch = useDispatch();

    const [vehicleCode, setVehicleCode] = useState("");
    const [licensePlateNumber, setLicensePlateNumber] = useState("");
    const [vehicleCategory, setVehicleCategory] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [vehicleStatus, setVehicleStatus] = useState("");
    const [remarks, setRemarks] = useState("");

    const handleVehicleOperation = (type: string) => {
        const newVehicle: Vehicle = {
            vehicle_code: vehicleCode,
            licence_plate_number: licensePlateNumber,
            vehicle_category: vehicleCategory,
            fuel_type: fuelType,
            vehicle_status: vehicleStatus,
            remarks,
        };

        switch (type) {
            case "ADD_VEHICLE":
                dispatch(addVehicle(newVehicle));
                clearForm();
                break;
            case "UPDATE_VEHICLE":
                dispatch(updateVehicle(newVehicle));
                clearForm();
                break;
            case "DELETE_VEHICLE":
                dispatch(deleteVehicle(vehicleCode));
                clearForm();
                break;
            default:
                break;
        }
    };

    const clearForm = () => {
        setVehicleCode("");
        setLicensePlateNumber("");
        setVehicleCategory("");
        setFuelType("");
        setVehicleStatus("");
        setRemarks("");
    };

    const handleSearchByVehicleCode = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const foundVehicle = vehicles.find((vehicle: Vehicle) => vehicle.vehicle_code === vehicleCode);
            if (foundVehicle) {
                setLicensePlateNumber(foundVehicle.licen_plate);
                setVehicleCategory(foundVehicle.category);
                setFuelType(foundVehicle.fuel);
                setVehicleStatus(foundVehicle.status);
                setRemarks(foundVehicle.remarks);
            } else {
                alert("Vehicle not found");
            }
        }
    };

    return (
        <>
            <form className="mx-1 mt-0 p-3 rounded-lg border-2 border-green-800 shadow-lg">
                <div className="grid gap-6 mb-6 md:grid-cols-3">
                    <div>
                        <label htmlFor="vehicle_code" className="block mb-2 text-sm font-bold text-gray-700">
                            Vehicle Code
                        </label>
                        <input
                            type="text"
                            id="vehicle_code"
                            onChange={(e) => setVehicleCode(e.target.value)}
                            onKeyDown={handleSearchByVehicleCode}
                            value={vehicleCode}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="V123"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="license_plate" className="block mb-2 text-sm font-bold text-gray-700">
                            License Plate
                        </label>
                        <input
                            type="text"
                            id="license_plate"
                            onChange={(e) => setLicensePlateNumber(e.target.value)}
                            value={licensePlateNumber}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="ABC-1234"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="vehicleCategory" className="block mb-2 text-sm font-bold text-gray-700">
                            Category
                        </label>
                        <select
                            id="vehicleCategory"
                            className="w-full p-1 border border-green-800 text-md rounded bg-gray-100 focus:outline-none shadow-md"
                            value={vehicleCategory}
                            onChange={(e) => setVehicleCategory(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                select category
                            </option>
                            <option value="Car">Car</option>
                            <option value="Van">Van</option>
                            <option value="Tractors-Land masters">Tractors-Land masters</option>
                            <option value="Tractors-4WD">Tractors-4WD</option>
                            <option value="Tankers truck">Tankers truck</option>
                            <option value="Land vehicles">Land vehicles</option>
                            <option value="Lorry">Lorry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="fuelType" className="block mb-2 text-sm font-bold text-gray-700">
                            Fuel Type
                        </label>
                        <select
                            id="fuelType"
                            className="w-full p-1 border border-green-800 text-md rounded bg-gray-100 focus:outline-none shadow-md"
                            value={fuelType}
                            onChange={(e) => setFuelType(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                select fuel type
                            </option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Kerosene">Kerosene</option>
                            <option value="Fuel oil">Fuel oil</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="vehicleStatus" className="block mb-2 text-sm font-bold text-gray-700">
                            Status
                        </label>
                        <select
                            id="vehicleStatus"
                            className="w-full p-1 border border-green-800 text-md rounded bg-gray-100 focus:outline-none shadow-md"
                            value={vehicleStatus}
                            onChange={(e) => setVehicleStatus(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                select status
                            </option>
                            <option value="Available">Available</option>
                            <option value="Out of Service">Out of Service</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="remarks" className="block mb-2 text-sm font-bold text-gray-700">
                            Remarks
                        </label>
                        <input
                            type="text"
                            id="remarks"
                            onChange={(e) => setRemarks(e.target.value)}
                            value={remarks}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="Good Condition"
                        />
                    </div>
                    <div>
                        <label htmlFor="assignedStaff" className="block mb-2 text-sm font-bold text-gray-700">
                            Select Staff
                        </label>
                        <select
                            id="assignedStaff"
                            className="w-full p-1 border border-green-800 text-md rounded bg-gray-100 focus:outline-none shadow-md"
                            required
                        >
                            <option value="" disabled selected>
                                choose a staff
                            </option>
                            <option value="Staff1">Staff 1</option>
                            <option value="Staff2">Staff 2</option>
                        </select>
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 mx-20 mt-6">
                    <button
                        type="button"
                        onClick={() => handleVehicleOperation("ADD_VEHICLE")}
                        className="w-full text-white bg-green-800 hover:bg-[#5ea080] border-2 border-green-800 font-bold rounded-lg text-sm px-5 py-2 text-center shadow-md"
                    >
                        Add Vehicle
                    </button>
                    <button
                        type="button"
                        onClick={() => clearForm()}
                        className="w-full text-white bg-green-800 hover:bg-[#5ea080] border-2 border-green-800 font-bold rounded-lg text-sm px-5 py-2 text-center shadow-md"
                    >
                        Clear
                    </button>
                </div>


            </form>

            <VehicleTableComponent vehicles={vehicles}/>
        </>
    );
};

export default VehicleFormComponent;