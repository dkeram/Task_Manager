import React ,{useState} from 'react';
import axios from 'axios';
import { useAuth } from '../providers/AuthContext';
import { useUrl } from '../providers/UrlContext';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Avatar from "@mui/joy/Avatar";
import ListDivider from "@mui/joy/ListDivider";

const UserRegistration = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [userclass, setUserclass] = useState('');
    const {token} = useAuth();
    const {url} = useUrl();



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
        <Typography variant="h1">Sign In</Typography>
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
            <Select defaultValue="User">
                <Option value="User">
                    <ListItemDecorator>
                    <Avatar size="sm" />
                    </ListItemDecorator>
                    User
                </Option>
            <ListDivider role="none" inset="startContent" />
                <Option value="Power User">
                    <ListItemDecorator>
                    <Avatar size="sm" />
                    </ListItemDecorator>
                    Power User
                </Option>
            </Select>
        </Box>
        <br/>
        <Button type="submit" variant="contained">Login</Button>
      </form>
    );

};

export default UserRegistration;