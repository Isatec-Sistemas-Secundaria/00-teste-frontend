import React from 'react'
import './login.css'
import { useState } from 'react';

const login = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "container dark" : "container"}>

            <form className="card">

                <div className='titulo'>

                    <button type="button" className="logo" onClick={() => setDarkMode(!darkMode)}>
                        <img src="src\assets\logo_monocrome.png" alt="Logo" />
                    </button>

                    <h1>Bem vindo</h1>
                    <p>Faça login na sua conta</p>
                </div>

                <div className='campo'>  
                    <label>Email</label>
                    <input type="email" placeholder="seu@email.com" />   
                </div>

            <div className='campo'> 
                <label>Senha</label>
                <input type="password" placeholder="••••••••" /> 
            </div>

            <div className='senha'>
                    <a href="#">Esqueceu a senha?</a>
            </div>
            <button className='botao' type="submit">Entrar</button>

            <p className="rodape">© 2026 Isatec Sistemas e Consultoria</p>
            
            </form>
        </div>

  )
}

export default login

