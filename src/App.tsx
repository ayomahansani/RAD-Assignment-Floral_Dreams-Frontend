import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; // ✅ Use Redux state
import RootLayout from "./components/sidebar/RootLayout";
import { ToastContainer } from "react-toastify";
import LoginFormComponent from "./components/login/LoginFormComponent.tsx";
import SignUpFormComponent from "./components/signUp/SignUpFormComponent.tsx";

function App() {

    const isAuthenticated = useSelector((state) => state.user.isAuthenticated); // Get from Redux

    console.log("App Component - isAuthenticated:", isAuthenticated);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginFormComponent />} />
                <Route path="/signup" element={<SignUpFormComponent />} />

                {/* Protected Routes */}
                <Route
                    path="/*"
                    element={
                        isAuthenticated ? (
                            <RootLayout />
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />
            </Routes>
            <ToastContainer />
        </Router>
    );
}

export default App;
