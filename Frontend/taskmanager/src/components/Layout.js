import React from 'react';
import { Typography, Drawer, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const Layout = ({ children })=>{
    const drawerWidth = 300;
    const menuItems = [
        {
            text : 'My Projects',
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
            path : '/tasks'
        },
        {
            text : 'Assign a Task',
            icon : '+',
            path : '/tasks'
        },
        {
            text : 'My Messages',
            icon : '+',
            path : '/messages'
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