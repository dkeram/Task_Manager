import React ,{useState} from 'react';
import axios from 'axios';
import { useAuth } from '../providers/AuthContext';
import { useUrl } from '../providers/UrlContext';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';

const UserRegistration = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [userclass, setUserclass] = useState('');
    const {token} = useAuth();
    const url = useUrl();

    const handleChange = (event) => {
        setUserclass(event.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        

        try{
            await axios.post(`${url}/users/`, {
                username : username,
                password : password,
                email : email,
                firstname : firstname,
                lastname : lastname,
                user_class : userclass,
            },{headers : {Authorization: `Bearer ${token}`},});

            setUsername('');
            setPassword('');
            setEmail('');
            setFirstname('');
            setLastname('');
            setUserclass('');

            window.location.href = '/projects';
        }catch(error){
            console.error('Error Creating new User', error);
        };
    };


    return(
        <form onSubmit={handleSubmit} align="center">
        <Typography variant="h1">Create New User</Typography>
        <br/>
        <Box sx={{ width: '100%'}}>
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    value={username} onChange={(e) => setUsername(e.target.value)} 
                />
        </Box>
        <br/>
        <Box sx={{ width: '100%'}}>
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} 
                />
        </Box>
        <br/>
        <Box sx={{ width: '100%'}}>
                <TextField
                    required
                    id="outlined-required"
                    label="e-mail"
                    type="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} 
                />
        </Box>
        <br/>
        <Box sx={{ width: '100%'}}>
                <TextField
                    required
                    id="outlined-required"
                    label="Firstname"
                    value={firstname} onChange={(e) => setFirstname(e.target.value)} 
                />
        </Box>
        <br/>
        <Box sx={{ width: '100%'}}>
                <TextField
                    required
                    id="outlined-required"
                    label="Lastname"
                    value={lastname} onChange={(e) => setLastname(e.target.value)} 
                />
        </Box>
        <br/>
        <Box sx={{ width: '100%'}}>
            <Select defaultValue="User" onChange={handleChange}>
                <MenuItem value={"User"}>User</MenuItem>
                <MenuItem value={"Power User"}>Power User</MenuItem>
            </Select>
        </Box>
        <br/>
        <Button type="submit" variant="contained">Create user</Button>
      </form>
    );

};

export default UserRegistration;