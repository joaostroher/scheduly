/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { toast } from 'react-toastify';
import NumberFormat from 'react-number-format';
import api from '../../services/api';
import { ServicesDiv, ServiceSelectLi } from './styles';

export default function Services() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState('');
  const [actService, setActService] = useState({});

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

  function handleInputChange(e) {
    // setActService({ ...actService, [e.target.name]: e.target.value, changed: true });
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
    console.tron.log(service);
    setActService(service);
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

  return (
    <ServicesDiv>
      <strong>Serviços</strong>

      <div className="addService">
        <input
          type="text"
          onChange={e => setNewService(e.target.value)}
          value={newService}
        />
        <MdAddCircle onClick={handleAddService} />
      </div>

      <ul>
        {services.map(service => (
          <ServiceSelectLi
            key={service._id}
            selected={service._id === actService._id}
            onClick={() => handleChangeSelect(service)}
          >
            {service.name}
          </ServiceSelectLi>
        ))}
      </ul>
      <div className="divInput">
        <label htmlFor="time">Tempo</label>
        <NumberFormat
          name="time"
          id="time"
          // disabled={!actService.active}
          onValueChange={value => handleNumericInputChange('time', value)}
          value={actService.time || ''}
          suffix=" min"
          allowNegative={false}
        />
      </div>

      <button type="submit" onClick={handleSave}>
        Salvar
      </button>
    </ServicesDiv>
  );
}
