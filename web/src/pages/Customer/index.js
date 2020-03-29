import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomerStyles } from './styles';
import api from '~/services/api';

export default function Register() {
  const [customer, setcustomer] = useState({});

  function handleInputChange(e) {
    e.preventDefault();
    setcustomer({ ...customer, [e.target.name]: e.target.value });
  }

  async function handleSaveCustomer(e) {
    e.preventDefault();

    const res = await api.post('/personages', customer);

    if (res) window.alert('Cliente criado');
    else window.alert('Falha ao criar Cliente');
  }

  return (
    <CustomerStyles>
      <div className = "container">
      <div className = "content">
      <p>
      <strong>Cadastro Usuário</strong>
      </p>
      <form onSubmit={handleSaveCustomer}>
          <label htmlFor="name">NOME</label>
          <input
            name="name"
            id="name"
            placeholder="Digite seu nome"
            required
            value={customer.name}
            onChange={handleInputChange}
          />
          <label htmlFor="email">E-MAIL</label>
          <input
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
            required
            value={customer.email}
            onChange={handleInputChange}
          />
          <label htmlFor="cpf">CPF</label>
          <input
            name="cpf"
            id="cpf"
            placeholder="000.000.000-00"
            value={customer.cpf}
            onChange={handleInputChange}
          />
          <label htmlFor="phone">TELEFONE</label>
          <input
            name="phone"
            id="phone"
            placeholder="(00) 00000-0000"
            value={customer.phone}
            onChange={handleInputChange}
          />
          <label htmlFor="password">SENHA</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Digite sua senha"
            required
            value={customer.password}
            onChange={handleInputChange}
          />

        <button class="btn" type="submit">
          Cadastrar
        </button>
        <div class="register">
        <Link to="/">
        <span>Já possui um cadastro?</span>
        </Link> 
      </div> 
      </form>
      </div>
      </div>
    </CustomerStyles>
  );
}
