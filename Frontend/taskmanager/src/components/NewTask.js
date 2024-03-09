import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../providers/AuthContext';
import { useUrl } from '../providers/UrlContext';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';

const NewTask = () =>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const url = useUrl();
    const {token, id} = useAuth();
    const [users, setUsers] = useState([]);
    const [projects, setProjects] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const fetchUsers = async()=>{
        try{ 
            const usersList = await axios.get(`${url}/users/`,{headers:{Authorization:`Bearer ${token}`},});
            setUsers(usersList.data);
        }catch(error){
            console.error('Error fetching user list', error);
        };
    };

    const fetchProjects = async() =>{
        try{
            const projectsList = await axios.get(`${url}/projects/`,{headers:{Authorization:`Bearer ${token}`},});
            setProjects(projectsList.data);
        }catch(error){
            console.error('Error fetching project list', error);
        };
    };

    useEffect(() => {
        fetchProjects();
        fetchUsers();
    }, []);

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            await axios.post(`${url}/tasks/`,  {
                title : title,
                description : description,
                due_date : dueDate,
                project : selectedProject,
                user : selectedUser,
            },{headers: {Authorization :`Bearer ${token}`},});

            setTitle('');
            setDescription('');
            setDueDate('');
            setSelectedProject([]);
            setSelectedUser([]);
        }catch(error){
            console.error('Error creating new task',error);
        }
    };

    return(
            <form onSubmit={handleSubmit} align="center">
                <Typography variant="h2">Create New Task for a User</Typography>
                <br/>
                <Box sx={{ width: '100%'}}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Title"
                            value={title} onChange={(e) => setTitle(e.target.value)} 
                        />
                </Box>
                <br/>
                <Box sx={{ width: '100%'}}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Description"
                            value={description} onChange={(e) => setDescription(e.target.value)} 
                        />
                </Box>
                <br/>
                <Box sx={{ width: '100%'}}>
                        <TextField
                            required
                            id="outlined-required"
                            type="date"
                            value={dueDate} onChange={(e) => setDueDate(e.target.value)} 
                        />
                </Box>
                <br/>
                <Box sx={{ width: '100%'}}>
                    <Select labelId="demo-simple-select-label" 
                            defaultValue={selectedProject} 
                            label="Select a Project" 
                            onChange={(e) => setSelectedProject(e.target.value)}>
                        {projects.map((project)=>(
                            <MenuItem key={project.id} value={project.id}>{project.title}</MenuItem>
                        ))}
                    </Select>
                </Box>
                <br/>
                <Box sx={{ width: '100%'}}>
                    <Select labelId="demo-simple-select-label" 
                            defaultValue={selectedUser} 
                            label="Select a User" 
                            onChange={(e) => setSelectedUser(e.target.value)}>
                        {users.map((user)=>(
                            <MenuItem key={user.id} value={user.id}>{user.lastname}</MenuItem>
                        ))}
                    </Select>
                </Box>
                <br/>
                <Button type="submit" variant="contained">Create Task</Button>
            </form>);
    
};

export default NewTask;