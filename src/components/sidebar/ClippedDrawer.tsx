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
import { Link, Routes, Route, useLocation } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import CarRentalIcon from '@mui/icons-material/CarRental';
import GroupIcon from '@mui/icons-material/Group';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import FieldIcon from '@mui/icons-material/Landscape';

import DashboardPage from '../../pages/Dashboard.tsx';
import StaffPage from '../../pages/StaffPage.tsx';
import VehiclePage from '../../pages/VehiclePage.tsx';
import EquipmentsPage from '../../pages/Equipments.tsx';
import FieldPage from "../../pages/FieldPage.tsx";
import FlowerPage from "../../pages/FlowerPage.tsx";

const drawerWidth = 230;

export default function HoverableSidebar() {
    const location = useLocation();

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
                            { text: 'Dashboard', icon: <DashboardIcon />, to: '/' },
                            { text: 'Flowers', icon: <LocalFloristIcon />, to: '/flower' },
                            { text: 'Customers', icon: <GroupIcon />, to: '/customer' },
                            { text: 'Place Order', icon: <FieldIcon />, to: '/placeOrder' },
                            { text: 'Order Details', icon: <CarRentalIcon />, to: '/orderDetails' },
                            { text: 'Payment', icon: <CarRentalIcon />, to: '/payment' },
                            { text: 'Log Out', icon: <CarRentalIcon />, to: '/logout' },
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
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'rgba(117,90,95,0.83)',
                                                transition: '0.3s',
                                            },
                                            ...(location.pathname === item.to && {
                                                backgroundColor: 'rgba(117,90,95,0.83)',
                                                fontWeight: 'bold',
                                            }),
                                        }}
                                    >
                                        <ListItemIcon sx={{ color: '#432e32' }}>{item.icon}</ListItemIcon>
                                        <ListItemText
                                            primary={item.text}
                                            sx={{
                                                color: '#432e32',
                                                fontFamily: 'Fira Code, monospace',
                                                fontSize: '25px', // Increase font size
                                                fontWeight: 'bold', // Make text bold
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
                <Box sx={{ padding: '16px', backgroundColor: '#674b50', borderRadius: '8px', marginBottom: '20px' }}>
                    <Typography variant="h5" sx={{ color: '#ecd9d9', fontWeight: 'bold',fontFamily: 'Roboto, sans-serif', textAlign: 'right' }}>
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
                        <Route path="/staff" element={<StaffPage />} />
                        <Route path="/vehicle" element={<VehiclePage />} />
                        <Route path="/equipment" element={<EquipmentsPage />} />
                        <Route path="/field" element={<FieldPage />} />
                    </Routes>
                </Box>

            </Box>


        </Box>
    );
}
