/*
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import api from '~/services/api';
import { getServiceLS, setServiceLS } from '~/local/service';

export default function ServiceRegister() {
  const history = useHistory();
  const [service, setService] = useState(getServiceLS() || {});

  useEffect(() => {
    setServiceLS({});
  }, []);

  function handleAddService() {
    async function addService() {
      try {
        setServices([
          ...services,
          (await api.post('services', { name: newService })).data,
        ]);
        setNewService('');
        toast.success('Serviço adicionado');
      } catch (error) {
        toast.error('Falha ao adicionar o Serviço');
      }
    }
    addService();
  }

  function handleSave(e) {
    e.preventDefault();

    const servicesToSave = services.map(mapService => {
      if (mapService._id === actService._id) return actService;
      return mapService;
    });

    async function saveService(service) {
      if (service._id) {
        await api.put(`services/${service._id}`, service);
      } else {
        await api.post('services', service);
      }
    }

    try {
      servicesToSave.forEach(service => {
        if (service.changed) saveService(service);
      });
      toast.success('Serviços salvos');
    } catch (error) {
      toast.error('Falha ao salvar os Serviços');
    }
  }

  function handleInputChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  function handleNumericInputChange(name, value) {
    setActService({ ...actService, [name]: value.floatValue, changed: true });
  }

  function handleChangeSelect(service) {
    setServices(
      services.map(mapService => {
        if (mapService._id === actService._id) return actService;
        return mapService;
      })
    );
    setActService(service);
  }

  return (
    <Container>
      <strong>Serviços</strong>

      <div className="addService">
        <input
          type="text"
          onChange={e => setNewService(e.target.value)}
          value={newService}
        />
        <input
          type="number"
          name="time"
          id="time"
          // disabled={!actService.active}
          onValueChange={value => handleNumericInputChange('time', value)}
          value={actService.time || ''}
          suffix=" min"
          allowNegative={false}
        />
      </div>

      <button type="submit" onClick={handleAddService}>
        Salvar
      </button>
    </Container>
  );

}
*/

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { Container } from './styles';
import api from '~/services/api';
import { getServiceLS, setServiceLS } from '~/local/service';

export default function ServiceRegister() {
  const history = useHistory();
  const [service, setService] = useState(getServiceLS() || {});

  useEffect(() => {
    setServiceLS({});
  }, []);

  function handleSaveService(e) {
    e.preventDefault();

    async function saveService() {
      try {
        let resService;
        if (service._id) {
          resService = await api.put(`services/${service._id}`, service);
          toast.success('Serviço salvo');
          history.push('/services');
        } else {
          resService = await api.post('services', {
            ...service,
            newPassword: service.password,
          });
          toast.success('Serviço criado');
          history.push('/services');
        }
        setService(resService.data);
      } catch (error) {
        toast.error('Falha ao salvar/cadastrar o Serviço');
      }
    }

    saveService();
  }

  function handleInputChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  function handleNumericInputChange(name, value) {
    // setActService({ ...service, [name]: value.floatValue, changed: true });
    setService({ ...service, [name]: value.floatValue, changed: true });
  }

  return (
    <Container>
      <form>
        <strong>Serviço - Stevan</strong>
        <div className="divInput">
          <label htmlFor="name">Nome</label>
          <input
            name="name"
            id="name"
            required
            value={service.name || ''}
            onChange={handleInputChange}
          />
        </div>

        <div className="divInput">
          <label htmlFor="time">Tempo</label>
          <NumberFormat
            name="time"
            id="time"
            allowNegative={false}
            required
            onValueChange={value => handleNumericInputChange('time', value)}
            suffix=" min"
            value={service.time || ''}
          />
        </div>

        <button type="submit" onClick={handleSaveService}>
          {service._id ? 'Salvar' : 'Cadastrar'}
        </button>
      </form>
    </Container>
  );
}
