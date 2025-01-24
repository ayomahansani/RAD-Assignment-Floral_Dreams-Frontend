import {Vehicle} from "../../models/vehicle.ts";

const VehicleTableComponent = ({ vehicles }: { vehicles: Vehicle[] }) => {
    return (

        <table className="mt-7 min-w-full border-collapse border-2 border-green-800 bg-transparent shadow-lg sm:rounded-lg">
            <thead>
            <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider">
                <th className="px-6 py-3 text-left font-bold">Vehicle Code</th>
                <th className="px-6 py-3 text-left font-bold">License Plate</th>
                <th className="px-6 py-3 text-left font-bold">Category</th>
                <th className="px-6 py-3 text-left font-bold">Fuel</th>
                <th className="px-6 py-3 text-left font-bold">Status</th>
                <th className="px-6 py-3 text-left font-bold">Remarks</th>
                <th className="px-6 py-3 text-left font-bold">Staff</th>
                <th className="px-6 py-3 text-left font-bold">Actions</th>
            </tr>
            </thead>
            <tbody>
            {vehicles.length > 0 ? (
                vehicles.map((vehicle: Vehicle, index: number) => (
                    <tr
                        key={index}
                        className="hover:bg-gray-100 even:bg-gray-50 odd:bg-white text-gray-700 border-t"
                    >
                        <td className="px-6 py-4">{vehicle.vehicle_code}</td>
                        <td className="px-6 py-4">{vehicle.licence_plate_number}</td>
                        <td className="px-6 py-4">{vehicle.vehicle_category}</td>
                        <td className="px-6 py-4">{vehicle.fuel_type}</td>
                        <td className="px-6 py-4">{vehicle.vehicle_status}</td>
                        <td className="px-6 py-4">{vehicle.remarks}</td>
                        <td className="px-6 py-4">staff</td>
                        <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                                <button
                                    // onClick={() => handleEditVehicle(index)}
                                    className="px-4 py-2 text-xs font-bold text-white bg-green-800 rounded hover:bg-green-700 shadow-md"
                                >
                                    Edit
                                </button>
                                <button
                                    // onClick={() => handleDeleteVehicle(index)}
                                    className="px-4 py-2 text-xs font-bold text-white bg-black rounded hover:bg-red-900 shadow-md"
                                >
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={8} className="text-center py-4 text-gray-500">
                        No vehicles available.
                    </td>
                </tr>
            )}
            </tbody>
        </table>

    );
};


export default VehicleTableComponent;