import HoverableSidebar from "./ClippedDrawer.tsx";
import {Route, Routes} from "react-router-dom";
import DashboardPage from "../../pages/DashboardPage.tsx";
import FlowerPage from "../../pages/FlowerPage.tsx";
import CustomerPage from "../../pages/CustomerPage.tsx";
import PlaceOrderPage from "../../pages/PlaceOrderPage.tsx";

function RootLayout(){
    return (
        <>
            <HoverableSidebar />
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/flower" element={<FlowerPage />} />
                <Route path="/customer" element={<CustomerPage />} />
                <Route path="/placeOrder" element={<PlaceOrderPage />} />
                <Route path="/orderDetails" element={<FlowerPage />} />
                <Route path="/payment" element={<FlowerPage />} />
            </Routes>
        </>
    );
}
export default RootLayout;