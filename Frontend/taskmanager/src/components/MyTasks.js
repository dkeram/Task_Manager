import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../providers/AuthContext';
import { useUrl } from '../providers/UrlContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';



const MyTasks=()=>{
    const [myTasks, setMyTasks] = useState([]);
    const {token, id} = useAuth();
    const url = useUrl();

    const fetchTasks = async() => {
        try{
            const response = await axios.get(`${url}/my_tasks/${id}`, {headers: {Authorization : `Bearer ${token}`},});
            setMyTasks(response.data)
        }catch(error){
            console.error('Error fetching tasks', error);
        }
    };

    useEffect(()=> {
        fetchTasks();
    },[]);

    return(
        <Box sx={{width: '100%'}}>
          {myTasks.length === 0 ? <h2>You have any task yet!</h2> :
          <>
            <h2>My Tasks</h2>
            {myTasks.map((task)=>
                <Grid item xs={12} md={6}>
                  <List key={task.id}>
                      <ListItem secondaryAction={
                          <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                        }
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <FolderIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={task.title}
                          secondary={task.project}
                        />
                      </ListItem>
                  </List>
              </Grid>
            )}
            </> }
        </Box>
    );
};


export default MyTasks;