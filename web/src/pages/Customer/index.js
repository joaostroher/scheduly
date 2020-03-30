import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { CustomerStyles } from './styles';
import api from '~/services/api';
import { getCustomer, isAuthenticated } from '~/class/customerClass';

export default function Register() {
  const [customer, setCustomer] = useState(getCustomer() || {});
  const logado = isAuthenticated();

  function handleInputChange(e) {
    e.preventDefault();

    setCustomer({ ...customer, [e.target.name]: e.target.value });
  }

  async function handleSaveCustomer(e) {
    e.preventDefault();

    customer.cpf = customer.cpf.replace(/\D/g, '');
    customer.phone = customer.phone.replace(/\D/g, '');

    if (logado) {
      await api
        .put('/api/customers', customer)
        .then(function() {
          window.alert('Registro Salvo');
        })
        .catch(function(error) {
          window.alert(JSON.stringify(error));
        });
    } else {
      await api
        .post('/api/customers', customer)
        .then(function() {
          window.alert('Registro Criado');
        })
        .catch(function(error) {
          window.alert(JSON.stringify(error));
        });
    }
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
          <InputMask
            name="cpf"
            id="cpf"
            mask="999.999.999-99"
            value={customer.cpf}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="phone">Telefone</label>
          <InputMask
            name="phone"
            id="phone"
            mask="(99) 99999-9999"
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
          {logado ? 'Salvar' : 'Cadastrar'}
        </button>

        {!logado ? <Link to="/login">Já possuo cadastro</Link> : null}
      </form>
    </CustomerStyles>
  );
}
