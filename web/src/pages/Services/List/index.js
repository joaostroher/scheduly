/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from './styles';
import { ServicesDiv } from './styles';
import { ServicesLi } from './styles';
import api from '~/services/api';
import { setServiceLS } from '~/local/service';

function ServicesList() {
  const [services, setServices] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function loadServices() {
      try {
        setServices((await api.get('services')).data);
      } catch (error) {
        toast.error('Falha ao carregar os Serviços');
      }
    }
    loadServices();
  }, []);

  function handleEditService(service) {
    setServiceLS(service);
    history.push('/services/register');
  }

  return (
    <Container>
      <div className="divBtnsOptions">
        <button type="submit" onClick={() => handleEditService({})}>
          Cadastrar Serviço
        </button>
      </div>

      <div className="divSelList">
        <ServicesDiv>
          <ul>
            {services.map(service => (
              <ServicesLi
                onClick={() => handleEditService(service)}
              >
                <div className="divShowService">
                  <strong className="spanService">{service.name}</strong>
                </div>
              </ServicesLi>
            ))}
          </ul>
        </ServicesDiv>
      </div>
    </Container>
  );
}

export default ServicesList;
