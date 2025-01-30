import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./components/sidebar/RootLayout";
import { ToastContainer } from "react-toastify";
import SignUpPage from "./pages/SignUpPage.tsx";
import LoginFormComponent from "./components/login/LoginFormComponent.tsx";

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

    console.log("App Component - isAuthenticated:", isAuthenticated);

    return (
        <Router>
            <Routes>
                {/* Login Route */}
                <Route
                    path="/login"
                    element={<LoginFormComponent onLogin={() => setIsAuthenticated(true)} />} // Pass onLogin callback

                />
                <Route
                    path="/signup"
                    element={<SignUpPage />} // Add route for sign-up page
                />

                {/* Protected Routes */}
                <Route
                    path="/*"
                    element={
                        isAuthenticated ? (
                            <RootLayout />
                        ) : (
                            <Navigate to="/login" replace /> // Redirect to login if not authenticated
                        )
                    }
                />
            </Routes>
            <ToastContainer /> {/* For alerts */}
        </Router>
    );
}

export default App
