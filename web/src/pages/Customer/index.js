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
      <form>
        <strong>Perfil</strong>

        <div className="input-container">
          <label htmlFor="name">Nome</label>
          <input
            name="name"
            id="name"
            required
            value={customer.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            id="email"
            required
            value={customer.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="cpf">CPF</label>
          <input
            name="cpf"
            id="cpf"
            value={customer.cpf}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="phone">Telefone</label>
          <input
            name="phone"
            id="phone"
            value={customer.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Senha</label>
          <input
            name="password"
            id="password"
            type="password"
            required
            value={customer.password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" onClick={handleSaveCustomer}>
          Cadastrar
        </button>
        <Link to="/login">Já possuo cadastro</Link>
      </form>
    </CustomerStyles>
  );
}
