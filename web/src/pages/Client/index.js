import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ClientStyles } from './styles';

async function handleSubmit() {}

export default function Client() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ClientStyles>
      <div className="container">
        <div className="content">
          <p>
            <strong>RESERVAS</strong>
          </p>
          <div className="service">
            <div className="date">
              <label>29</label>
              <label>AGO</label>
              <label>2020</label>
            </div>
            <div className="details">
              <label>SÁBADO</label>
              <label>Horário: 10:00</label>
              <label>Duração: 30min</label>
            </div>
            <div className="job">
              <label>CORTE DE CABELO</label>
              <label>R$ 30,00</label>
            </div>
            <div className="status">
              <label>RESERVADO</label>
            </div>
          </div>
          <Link to="/services">
            <button className="btn" type="submit">
              Cadastrar Serviço
            </button>
          </Link>
        </div>
      </div>
    </ClientStyles>
  );
}
