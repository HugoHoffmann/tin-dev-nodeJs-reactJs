import React, { useState } from 'react';
import api from '../services/api';
import logo from '../assets/logo.svg';
import './Login.css'

export default function Login({ hitory }) {
    const [username, setUsername] = useState('');
    async function handleSubmit(e){
        e.preventDefault();
        const response = await api.post('/devs', {
            username,
        });
        
        console.log(response);
        hitory.push('/main');

    }
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev"/>
                <input 
                    placeholder="Informe o seu usuário do GitHub"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit" >Login</button>
            </form>
        </div>
    );
}

