import React, {useState} from 'react';
import axios from 'axios';
import {useAuth} from '../providers/AuthContext';
import {useUrl} from '../providers/UrlContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const ProjectPostForm = (props) => {
    const { token } = useAuth();
    const url = useUrl();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');


    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            await axios.post(`${url}/projects/`, {
                title : title,
                description : description,
                due_date : dueDate,
            },{headers : {Authorization: `Bearer ${token}`},});

            setTitle('');
            setDescription('');
            setDueDate('');

        }catch(error){
            console.error('Error Creating the Project', error);
        };
    };

    return(
        <><h2>Create a new Project</h2>
        <Box component="form"
            sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <div>
                <label>Title:</label>
                <TextField
                    required
                    id="outlined-required"
                    label="required"
                    value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <TextField
                    required
                    id="outlined-required"
                    label="required"
                    value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>DeadLine Date:</label>
                <DatePicker 
                 selected={dueDate}
                 onChange={setDueDate}
                dateFormat="MM/dd/yyyy"
                />
            </div>
            <Button type="submit" variant="contained">Create Project</Button>
        </Box></>
    );

};


export default ProjectPostForm;