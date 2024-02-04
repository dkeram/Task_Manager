import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../providers/AuthContext';
import { useUrl } from '../providers/UrlContext';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Projects = (props) => {
    const [selectedProject , setSelectedProject] = useState(null);
    const {token, userClass, firstname, isAuth } = useAuth();
    const [projects, setProjects] = useState([]);
    const url = useUrl();

    const fetchProjects = async() =>{
        try{
            const response = await axios.get(`${url}/projects/`,{headers: {Authorization :`Bearer ${token}`},});
            setProjects(response.data);
        }catch(error){
            console.error('Error fetching Projects', error);
        }
    };

    const handleProjectClick = (projectId)=>{
        if (selectedProject === projectId){
            setSelectedProject(null);
        }else{
            setSelectedProject(projectId);
        };
    };

    useEffect(() =>{
        fetchProjects();
    },[]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'description', headerName: 'Description', width: 250 },
        { field: 'due_date', headerName: 'Due Date', type: 'Date', width: 300 },
      ];
      

    return(
      <>
      <Box sx={{ width: '100%'}}>
      <Link to="/new_project"><Button variant="outlined" >Create A New Project</Button></Link>
      <Typography variant="h1" gutterBottom>Active Projects</Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={projects}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      </Box>
      </>
    );
};



export default Projects;