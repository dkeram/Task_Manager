import React, {useState} from 'react';
import axios from 'axios';
import {useAuth} from '../providers/AuthContext';
import {useUrl} from '../providers/UrlContext';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setToken} = useAuth();
    const url = useUrl();

    const submit = async e => {
        e.preventDefault();

        const user = {
            username : username,
            password : password,
        };

        const {data} = await axios.post(`${url}/token/`, user, {headers: {'Content-Type':'application/json'}},{withCredentials: true});
        localStorage.clear();
        setToken(data.access)
        localStorage.setItem('refresh_token', data.refresh);
        axios.defaults.headers.common['Authorization']=`Bearer ${data['access']}`;

        window.location.href = '/projects/'
    }
    return(
      <form onSubmit={submit} align="center">
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
        <Button type="submit" variant="contained">Login</Button>
      </form>
    );
};


export default Login;