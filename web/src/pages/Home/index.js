import React, { useState } from 'react';
import { HomeStyles } from './styles';
import { Link } from 'react-router-dom';

async function handleSubmit(){
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <HomeStyles>
    <div className = "container">
    <div className = "content">
    <div className = "logo"></div>
    <p>
      <strong>Login</strong>
    </p>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-MAIL</label>
      <input 
        id="email" 
        type="email" 
        placeholder="Digite seu e-mail"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <label htmlFor="password">SENHA</label>
      <input 
        id="password" 
        type="password" 
        placeholder="Digite sua senha"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button class="btn" type="submit">Entrar</button>
    </form>
    <div class="register">
    <Link to="/register">
      <span>Não possui cadastro?</span>
      </Link> 
    </div> 
    </div>
    </div>
    </HomeStyles>
);
}
