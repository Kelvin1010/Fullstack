import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import { login } from '../../redux/apiCall'
import { useNavigate } from 'react-router-dom';

function Login() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSignin = (e) => {
        e.preventDefault();
        login(dispatch, {username, password})
        navigate('/')
    }

    return (
        <div className='login'>
            <input 
                type={'text'} 
                placeholder="username" 
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type={'password'} 
                placeholder='password' 
                onChange={(e) =>setPassword(e.target.value)}
            />
            <button onClick={handleSignin}>Login</button>
        </div>
    )
}

export default Login