import React, {useState} from 'react';
import axios from 'axios';
import {useAuth} from '../providers/AuthContext';
import {useUrl} from '../providers/UrlContext';


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

        const {data} = await axios.post(`${url}token/`, user, {headers: {'Content-Type':'application/json'}},{withCredentials: true});
        localStorage.clear();
        setToken(data.access)
        localStorage.setItem('refresh_token', data.refresh);
        axios.defaults.headers.common['Authorization']=`Bearer ${data['access']}`;

        window.location.href = '/projects/'
    }
    return(
        <div className="container mt-5">
          <form onSubmit={submit}>
            <div className="mt-3">
              <h2 className="Auth-form-title">Sign In</h2>
              <div className="mt-3">
                <label>Username:</label>
                <input className="form-control mt-1" 
                  placeholder="Enter Username" 
                  name='username'  
                  type='text' value={username}
                  required 
                  onChange={e => setUsername(e.target.value)}/>
              </div>
              <div className="form-group mt-3">
                <label>Password:</label>
                <input name='password' 
                  type="password"     
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={password}
                  required
                  onChange={e => setPassword(e.target.value)}/>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" variant="contained">Submit</button>
              </div>
            </div>
         </form>
       </div>
    );
};


export default Login;