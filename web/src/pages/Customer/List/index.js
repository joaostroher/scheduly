/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from './styles';
import { CustomersDiv } from './styles';
import { CustomersLi } from './styles';
import api from '~/services/api';
import { setCustomerLS } from '~/local/customer';

function CustomersList() {
  const [customers, setCustomers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function loadCustomers() {
      try {
        setCustomers((await api.get('customers')).data || []);
      } catch (error) {
        toast.error('Falha ao carregar os Clientes');
      }
    }

    loadCustomers();
  }, []);

  function handleEditCustomer(customer) {
    setCustomerLS(customer);
    history.push('/customers/register');
  }

  return (
    <Container>
      <div className="divBtnsOptions">
        <button type="submit" onClick={() => handleEditCustomer({})}>
          Cadastrar novo
        </button>
      </div>

      <div className="divSelList">
        <CustomersDiv>
          <ul>
            {customers.map(customer => (
              <CustomersLi
                onClick={() => handleEditCustomer(customer)}
              >
                <div className="divShowService">
                  <strong className="spanService">{customer.name}</strong>
                </div>
              </CustomersLi>
            ))}
          </ul>
        </CustomersDiv>
      </div>
    </Container>
  );
}

export default CustomersList;
