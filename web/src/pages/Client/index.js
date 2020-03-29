import React, { useState } from 'react';
import { ClientStyles } from './styles';
import { Link } from 'react-router-dom';

async function handleSubmit(){
}

export default function Client() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ClientStyles>
    <div className = "container">
      <div className = "content">

        <p>
        <strong>RESERVAS</strong>
        </p>
        <div class = "service">
          <div class = "date" >
          <label>29</label>
          <label>AGO</label>
          <label>2020</label>
          </div>
          <div class = "details">
          <label>SÁBADO</label>
          <label>Horário: 10:00</label>
          <label>Duração: 30min</label>
          </div>
          <div class = "job">
          <label>CORTE DE CABELO</label>
          <label>R$ 30,00</label>
          </div>
          <div class = "status" >
          <label>RESERVADO</label>
          </div>
        </div>
        <Link to="/services">
        <button className="btn" type="submit">Cadastrar Serviço</button>
        </Link>
      </div>
    </div>
    </ClientStyles>
);
}
