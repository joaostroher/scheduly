import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import { Container } from './styles';
import api from '~/services/api';
import { getCustomerLS, setCustomerLS } from '~/local/customer';

export default function CustomerRegister() {
  const [customer, setCustomer] = useState(getCustomerLS() || {});

  useEffect(() => {
    setCustomerLS({});
  }, []);

  function handleSaveCustomer(e) {
    e.preventDefault();

    async function saveCustomer() {
      try {
        let resCustomer;
        if (customer._id) {
          resCustomer = await api.put('customers', customer);
          toast.success('Usuário salvo');
        } else {
          resCustomer = await api.post('customers', {
            ...customer,
            newPassword: customer.password,
          });
          toast.success('Usuário criado');
        }
        setCustomer(resCustomer.data);
      } catch (error) {
        toast.error('Falha ao salvar o Perfil');
      }
    }

    saveCustomer();
  }

  function handleInputChange(e) {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <form>
        <strong>Cliente</strong>

        <div className="divInput">
          <label htmlFor="name">Nome</label>
          <input
            name="name"
            id="name"
            required
            value={customer.name || ''}
            onChange={handleInputChange}
          />
        </div>

        <div className="divInput">
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            id="email"
            required
            value={customer.email || ''}
            onChange={handleInputChange}
          />
        </div>

        <div className="divInput">
          <label htmlFor="cpf">CPF</label>
          <InputMask
            name="cpf"
            id="cpf"
            mask="999.999.999-99"
            value={customer.cpf || ''}
            onChange={handleInputChange}
          />
        </div>

        <div className="divInput">
          <label htmlFor="cnpj">CNPJ</label>
          <InputMask
            name="cnpj"
            id="cnpj"
            mask="99.999.999/9999-99"
            value={customer.cnpj || ''}
            onChange={handleInputChange}
          />
        </div>

        <div className="divInput">
          <label htmlFor="phone">Telefone</label>
          <InputMask
            name="phone"
            id="phone"
            mask="(99) 99999-9999"
            value={customer.phone || ''}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" onClick={handleSaveCustomer}>
          {customer._id ? 'Salvar' : 'Cadastrar'}
        </button>
      </form>
    </Container>
  );
}
