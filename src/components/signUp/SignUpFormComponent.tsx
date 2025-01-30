import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpFormComponent() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (event: React.FormEvent) => {
        event.preventDefault();
        if (username && email && password) {
            // Perform the sign-up logic here (e.g., API call to create a new user)
            console.log("Sign-up successful:", { username, email, password });
            navigate("/"); // Redirect to the dashboard or login page
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div
                className="flex justify-center items-center bg-green-500 px-6 py-12 rounded-lg"
                style={{ width: "1000px", height: "700px" }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full">
                    {/* Form Section */}
                    <div className="flex flex-col justify-center items-center sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="flex items-center justify-center space-x-2 mt-8">
                            <h1 className="text-center text-3xl font-extrabold tracking-tight text-gray-900">
                                Join Us!
                            </h1>
                        </div>
                        <h2 className="mt-2 mb-6 text-center text-2xl font-semibold tracking-tight text-gray-900">
                            Create a new account
                        </h2>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" onSubmit={handleSignUp}>
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder-gray-400 focus:ring-indigo-600 focus:ring-2 focus:border-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder-gray-400 focus:ring-indigo-600 focus:ring-2 focus:border-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder-gray-400 focus:ring-indigo-600 focus:ring-2 focus:border-indigo-600 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-indigo-600 focus:ring-2 focus:ring-offset-2"
                                    >
                                        Sign Up
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center items-center h-full rounded-lg overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src="/flower3.jpg"
                            alt="Sign Up"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpFormComponent;