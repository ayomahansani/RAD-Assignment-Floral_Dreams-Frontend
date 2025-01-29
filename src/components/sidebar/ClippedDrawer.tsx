import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PaymentIcon from '@mui/icons-material/Payment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import DashboardPage from '../../pages/DashboardPage.tsx';
import FlowerPage from "../../pages/FlowerPage.tsx";
import {useEffect, useState} from "react";
import CustomerPage from "../../pages/CustomerPage.tsx";
import PlaceOrderPage from "../../pages/PlaceOrderPage.tsx";

const drawerWidth = 230;

export default function HoverableSidebar() {

    const [currentTime, setCurrentTime] = useState(new Date());
    const navigate = useNavigate(); // Hook for navigation
    const location = useLocation();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer); // Clean up the timer on unmount
    }, []);

    const handleLogout = () => {
        // Perform any logout logic here (e.g., clear tokens, session, etc.)
        console.log("User logged out");

        // Navigate to the login page
        navigate("/login");
    };

    return (
        <Box sx={{
            display: 'flex',
            minHeight: '100vh',
            backgroundImage: 'url(/background.jpg)', // Set your background image path
            backgroundSize: 'cover', // Ensure the image covers the entire background
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat', // Prevent repeating the image
            padding: '20px',
        }}>
            <CssBaseline />

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        color: 'black',
                        backgroundColor: '#bda6a6',
                        opacity: 0.9,
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                        borderRadius: '16px',
                        height: 'calc(100vh - 40px)',
                        marginTop: '20px',
                        marginBottom: '20px',
                        marginLeft: '20px',
                        marginRight: '20px',
                        transition: 'width 0.3s',
                        overflowX: 'hidden',
                        // bda6a6
                    },
                }}
            >
                <Toolbar />
                <Box sx={{textAlign: 'center', mt: 0}}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#432e32', // Custom color
                            fontFamily: 'Fira Code, monospace',
                            fontSize: '26px', // Custom font size
                            fontWeight: 'bold', // Custom font weight
                            marginBottom: '0',
                        }}
                    >
                        Floral Dreams
                    </Typography>

                    <img
                        src="/logo.png"
                        alt="Green Shadow Logo"
                        style={{width: '150px', height: 'auto', marginTop: '0', marginLeft: '40px'}} // Adjust size and spacing
                    />

                    <List>
                        {[
                            { text: 'Dashboard', icon: <DashboardIcon />, to: '/' }, // DashboardPage Icon
                            { text: 'Flowers', icon: <LocalFloristIcon />, to: '/flower' }, // Flower Icon
                            { text: 'Customers', icon: <GroupIcon />, to: '/customer' }, // Group Icon (Customer Management)
                            { text: 'Place Order', icon: <ShoppingCartIcon />, to: '/placeOrder' }, // Shopping Cart Icon for Orders
                            { text: 'Order Details', icon: <ReceiptLongIcon />, to: '/orderDetails' }, // Receipt Icon for Order Details
                            { text: 'Payment', icon: <PaymentIcon />, to: '/payment' }, // Payment Icon for Transactions
                            { text: 'Log Out', icon: <ExitToAppIcon />, to: '/login' }, // Log Out Icon
                        ].map((item) => (
                            <Tooltip title={item.text} placement="right" key={item.text}>
                                <ListItem
                                    disablePadding
                                    sx={{
                                        marginBottom: '5px', // Add vertical margin between list items
                                        border: '2px solid #674b50', // Add border
                                        // borderRadius: '8px', // Round the corners
                                    }}
                                >
                                    <ListItemButton
                                        component={Link}
                                        to={item.to}
                                        onClick={item.text === 'Log Out' ? handleLogout : undefined} // Add onClick handler for logout
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'rgba(117,90,95,0.83)',
                                                transition: '0.3s',
                                                '& .MuiListItemText-primary': {
                                                    color: '#ecd9d9', // Change the text color
                                                },
                                                '& .MuiListItemIcon-root': {
                                                    color: '#ecd9d9', // Change the icon color
                                                },
                                            },
                                            ...(location.pathname === item.to && {
                                                backgroundColor: 'rgba(117,90,95,0.83)',
                                                fontWeight: 'bold',
                                                '& .MuiListItemText-primary': {
                                                    color: '#ecd9d9',
                                                },
                                                '& .MuiListItemIcon-root': {
                                                    color: '#ecd9d9',
                                                },
                                            }),
                                        }}
                                    >
                                        <ListItemIcon sx={{ color: '#432e32' }}>{item.icon}</ListItemIcon>
                                        <ListItemText
                                            primary={item.text}
                                            primaryTypographyProps={{
                                                sx: {
                                                    color: '#432e32', // Custom text color
                                                    fontFamily: 'Montserrat, sans-serif', // Sleek and geometric
                                                    fontSize: '16px', // Custom font size
                                                    fontWeight: 'bold', // Custom font weight
                                                },
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </Tooltip>
                        ))}
                    </List>
                </Box>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#bda6a6',opacity: 0.9, borderRadius: '16px', marginLeft: '20px' }}>
                {/* Upper box for the page title */}
                <Box
                    sx={{ padding: '16px', backgroundColor: '#674b50', borderRadius: '8px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    {/* Left side for date and time */}
                    <Typography variant="h6" sx={{ color: '#ecd9d9', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
                        {currentTime.toLocaleDateString()}  -  {currentTime.toLocaleTimeString()}
                    </Typography>

                    {/* Right side for page title */}
                    <Typography
                        variant="h5"
                        sx={{ color: '#ecd9d9', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', textAlign: 'right' }}
                    >
                        {/* Dynamic page title based on the current route */}
                        {(() => {
                            switch (location.pathname) {
                                case '/':
                                    return 'Dashboard';
                                case '/flower':
                                    return 'Flower Management';
                                case '/customer':
                                    return 'Customer Management';
                                case '/placeOrder':
                                    return 'Orders Management';
                                case '/orderDetails':
                                    return 'Order Details';
                                case '/payment':
                                    return 'Payments';
                                case '/logout':
                                    return 'Logout';
                                default:
                                    return '';
                            }
                        })()}
                    </Typography>
                </Box>

                {/* Lower box for the page content */}
                <Box sx={{ padding: '16px', backgroundColor: '#674b50', borderRadius: '8px', height: '87%' }}>
                    <Routes>
                        <Route path="/" element={<DashboardPage />} />
                        <Route path="/flower" element={<FlowerPage />} />
                        <Route path="/customer" element={<CustomerPage />} />
                        <Route path="/placeOrder" element={<PlaceOrderPage />} />
                        <Route path="/orderDetails" element={<FlowerPage />} />
                        <Route path="/payment" element={<FlowerPage />} />
                    </Routes>
                </Box>

            </Box>


        </Box>
    );
}
