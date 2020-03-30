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
          <InputMask
            name="cpf"
            id="cpf"
            mask="999.999.999-99"
            value={customer.cpf}
            onChange={handleInputChange}
          />      
        <div className="input-container">
          <label htmlFor="phone">Telefone</label>
          <InputMask
            name="phone"
            id="phone"
            mask="(99) 99999-9999"
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
        </div>


        <button type="submit" onClick={handleSaveCustomer}>
          {logado ? 'Salvar' : 'Cadastrar'}
        </button>

        {!logado ? <Link to="/login">Já possuo cadastro</Link> : null}
      </form>
      </div>
      </div>
    </CustomerStyles>
  );
}
