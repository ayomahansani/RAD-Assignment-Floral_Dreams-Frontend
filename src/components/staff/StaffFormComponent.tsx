import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import StaffTableComponent from "./StaffTableComponent.tsx";


const StaffFormComponent = () => {

    const staffs = useSelector((store) => store.staff)
    const dispatch = useDispatch();

    const [staffId, setStaffId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [designation, setDesignation] = useState("");
    const [gender, setGender] = useState("");
    const [joinedDate, setJoinedDate] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");


    return (
        <>
            <form className="mx-1 mt-0 p-3 rounded-lg border-2 border-green-800 shadow-lg">
                <div className="grid gap-6 mb-6 md:grid-cols-4">
                    <div>
                        <label htmlFor="staff_id" className="block mb-2 text-sm font-bold text-gray-700">
                            Staff Id
                        </label>
                        <input
                            type="text"
                            id="staff_id"
                            onChange={(e) => setStaffId(e.target.value)}
                            // onKeyDown={handleSearchByVehicleCode}
                            value={staffId}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="S001"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-bold text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="Ayoma"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-bold text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="Hansani"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block mb-2 text-sm font-bold text-gray-700">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="Makola"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="contact_number" className="block mb-2 text-sm font-bold text-gray-700">
                            Phone
                        </label>
                        <input
                            type="text"
                            id="contact_number"
                            onChange={(e) => setContactNumber(e.target.value)}
                            value={contactNumber}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="0750569987"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="ayo@gmail.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="date_of_birth" className="block mb-2 text-sm font-bold text-gray-700">
                            DOB
                        </label>
                        <input
                            type="date"
                            id="date_of_birth"
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            value={dateOfBirth}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="joined_date" className="block mb-2 text-sm font-bold text-gray-700">
                            Joined Date
                        </label>
                        <input
                            type="date"
                            id="joined_date"
                            onChange={(e) => setJoinedDate(e.target.value)}
                            value={joinedDate}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="designation" className="block mb-2 text-sm font-bold text-gray-700">
                            Designation
                        </label>
                        <input
                            type="text"
                            id="designation"
                            onChange={(e) => setDesignation(e.target.value)}
                            value={designation}
                            className="w-full p-1 border border-green-800 rounded bg-gray-100 focus:outline-none shadow-md"
                            placeholder="Assistant Manager"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block mb-2 text-sm font-bold text-gray-700">
                            Gender
                        </label>
                        <select
                            id="gender"
                            className="w-full p-1 border border-green-800 text-md rounded bg-gray-100 focus:outline-none shadow-md"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                select the gender
                            </option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="role" className="block mb-2 text-sm font-bold text-gray-700">
                            Role
                        </label>
                        <select
                            id="role"
                            className="w-full p-1 border border-green-800 text-md rounded bg-gray-100 focus:outline-none shadow-md"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                select the role
                            </option>
                            <option value="MANAGER">Manager</option>
                            <option value="ADMINISTRATOR">Administrator</option>
                            <option value="SCIENTIST">Scientist</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="assignedField" className="block mb-2 text-sm font-bold text-gray-700">
                            Select Field
                        </label>
                        <select
                            id="assignedField"
                            className="w-full p-1 border border-green-800 text-md rounded bg-gray-100 focus:outline-none shadow-md"
                            required
                        >
                            <option value="" disabled selected>
                                choose a field
                            </option>
                            <option value="Field1">Field 1</option>
                            <option value="Field2">Field 2</option>
                        </select>
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 mx-20 mt-6">
                    <button
                        type="button"
                        onClick={() => handleStaffOperation("ADD_STAFF")}
                        className="w-full text-white bg-green-800 hover:bg-[#5ea080] border-2 border-green-800 font-bold rounded-lg text-sm px-5 py-2 text-center shadow-md"
                    >
                        Add Staff
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

            <StaffTableComponent staffs={staffs} />
        </>
    );
};

export default StaffFormComponent;