import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginPageProps {
    onLogin?: () => void; // Optional callback for login handling
}

function LoginFormComponent({ onLogin }: LoginPageProps) {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (event: React.FormEvent) => {
        event.preventDefault();
        if (username && password) {
            // Trigger login callback if provided
            if (onLogin) onLogin();
            // Navigate to the dashboard
            navigate("/");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen relative">
            {/* Background Image with Blur */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/flower3.jpg')",
                    filter: "blur(3px)", // Apply the blur effect only to the background
                    zIndex: -1 // Ensure the background is behind the content
                }}
            />
            <div
                className="bg-black bg-opacity-40 backdrop-blur-lg shadow-2xl shadow-black rounded-3xl flex overflow-hidden w-full max-w-4xl h-[600px]">
                {/* Left Side - Form */}
                <div className="w-1/2 p-10 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-pink-300 text-center mb-6" style={{ fontFamily: 'Cinzel, serif' }}>FLORAL DREAMS</h1>
                    <h2 className="text-2xl font-bold text-black text-center mb-6" style={{ fontFamily: 'Merriweather, serif' }}>Welcome Back!</h2>
                    <form className="space-y-6" onSubmit={handleSignIn}>
                        <div>
                            <label className="block text-md font-medium text-pink-200 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Username</label>
                            <input
                                type="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full p-1 border rounded focus:outline-none shadow-lg bg-pink-100"
                            />
                        </div>
                        <div>
                            <label className="block text-md font-medium text-pink-200 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-1 border rounded focus:outline-none shadow-lg bg-pink-100 mb-6"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-pink-300 text-lg font-extrabold text-black py-1 rounded-md hover:bg-black hover:text-pink-200 transition shadow-lg shadow-pink-950"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Sign In
                        </button>
                        <p className="text-center text-md text-white mr-2"
                           style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Don't have an account? <span className="ml-2 text-pink-300 cursor-pointer hover:underline"
                                                         onClick={() => navigate("/signup")}>Sign Up</span>
                        </p>
                    </form>
                </div>
                {/* Right Side - Image */}
                <div className="w-1/2 hidden lg:flex items-center justify-center bg-pink-300 opacity-90">
                    <img src="/flower3.jpg" alt="Flower shop" className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    );
}

export default LoginFormComponent;