import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RootLayout from "./components/sidebar/RootLayout";
import { ToastContainer } from "react-toastify";
import LoginFormComponent from "./components/login/LoginFormComponent.tsx";
import SignUpFormComponent from "./components/signUp/SignUpFormComponent.tsx";
import {RootState} from "./store/Store.ts";

function App() {

    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated); // Get from Redux

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
