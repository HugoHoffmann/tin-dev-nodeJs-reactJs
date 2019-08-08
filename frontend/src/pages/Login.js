import React from 'react';
import logo from '../assets/logo.svg';
import './Login.css'

export default function Login() {
    return (
        <div className="login-container">
            <form >
                <img src={logo} alt="Tindev"/>
                <input placeholder="Informe o seu usuário do GitHub"/>
                <button type="submit" >Login</button>
            </form>
        </div>
    );
}

