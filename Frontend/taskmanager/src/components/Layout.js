import React from 'react';
import {useAuth} from '../providers/AuthContext';
import { Typography, Drawer, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const Layout = ({ children })=>{
    const {token, userClass,id } = useAuth();
    const drawerWidth = 300;
    const menuItems = [
        {
            text : 'Projects',
            icon : '+',
            path : '/projects'
        },
        {
            text : 'Create New Project',
            icon : '+',
            path : '/new_project'
        },
        {
            text : 'My Tasks',
            icon : '+',
            path : `/tasks/${id}`
        },
        {
            text : 'Assign a Task',
            icon : '+',
            path : '/tasks'
        },
        {
            text : 'Create New User',
            icon : '+',
            path : '/user_registration'
        },
        {
            text : 'My Messages',
            icon : '+',
            path : `/messages/${id}`
        },
        {
            text : 'Logout',
            icon : '+',
            path : '/logout'
        },
    ];

    return(
        <Box sx={{ display: "flex" }}>
            {/* App Bar*/}

            {/* Side Drawer */}
            <Drawer 
                sx={{
                    width: drawerWidth
                  }}
                variant="permanent"
                anchor="left"
            >
                <Box>
                    <Typography variant="h5" align="center">
                        Task Manager
                    </Typography>
                </Box>
                <List>
                    {menuItems.map(item =>(
                        <ListItemButton to={item.path}>
                            <ListItem key={item.text}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>

            <Box>
                {children}
            </Box>
        </Box>
    );
};





export default Layout;