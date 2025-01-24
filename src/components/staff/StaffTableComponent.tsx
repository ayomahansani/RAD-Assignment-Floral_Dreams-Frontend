import {Staff} from "../../models/staff.ts";


const StaffTableComponent = ({ staffs }: { staffs: Staff[] }) => {

    return (

        <table className="mt-7 min-w-full border-collapse border-2 border-green-800 bg-transparent shadow-lg sm:rounded-lg">
            <thead>
            <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider">
                <th className="px-6 py-3 text-left font-bold">Staff Id</th>
                <th className="px-6 py-3 text-left font-bold">First Name</th>
                <th className="px-6 py-3 text-left font-bold">Last Name</th>
                <th className="px-6 py-3 text-left font-bold">Email</th>
                <th className="px-6 py-3 text-left font-bold">Gender</th>
                <th className="px-6 py-3 text-left font-bold">Phone</th>
                <th className="px-6 py-3 text-left font-bold">Joined Date</th>
                <th className="px-6 py-3 text-left font-bold">Role</th>
                <th className="px-6 py-3 text-left font-bold">Assigned Fields</th>
                <th className="px-6 py-3 text-left font-bold">Actions</th>
            </tr>
            </thead>
            <tbody>
            {staffs.length > 0 ? (
                staffs.map((staff: Staff, index: number) => (
                    <tr
                        key={index}
                        className="hover:bg-gray-100 even:bg-gray-50 odd:bg-white text-gray-700 border-t"
                    >
                        <td className="px-6 py-4">{staff.staff_id}</td>
                        <td className="px-6 py-4">{staff.first_name}</td>
                        <td className="px-6 py-4">{staff.last_name}</td>
                        <td className="px-6 py-4">{staff.email}</td>
                        <td className="px-6 py-4">{staff.gender}</td>
                        <td className="px-6 py-4">{staff.contact_number}</td>
                        <td className="px-6 py-4">{staff.joined_date}</td>
                        <td className="px-6 py-4">{staff.role}</td>
                        <td className="px-6 py-4">fields</td>
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
                    <td colSpan={10} className="text-center py-4 text-gray-500">
                        No staffs available.
                    </td>
                </tr>
            )}
            </tbody>
        </table>

    );
};

export default StaffTableComponent;