/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { subSeconds, parseISO, format } from 'date-fns';
import api from '~/services/api';
import { SingScheduleDiv } from './styles';
import { getSingScheduleLS, clearSingSchedule } from '~/local/singSchedule';

export default function SchedulesRegister() {
  const [lclSchedule] = useState(getSingScheduleLS());
  const [actDate] = useState(subSeconds(new Date(), 1));
  const [services, setServices] = useState([]);
  const [clients, setClients] = useState([]);
  const [schedule, setSchedule] = useState({
    ...lclSchedule,
    date_time_start: lclSchedule
      ? parseISO(lclSchedule.date_time_start)
      : actDate,
  });
  const [datePass] = useState(schedule.date_time_start < actDate);

  const history = useHistory();

  useEffect(() => {
    clearSingSchedule();

    const actSchedule = { ...schedule };

    async function loadServices() {
      try {
        const loadedServices = await api.get('services');
        setServices(loadedServices.data || []);
        actSchedule.service_id =
          schedule.service_id || loadedServices.data[0]._id;
      } catch (error) {
        toast.error('Falha ao carregar os Serviços');
      }
    }
    loadServices();

    async function loadClients() {
      try {
        const loadedClients = await api.get('customers');
        if (loadedClients.data.length > 0) {
          setClients(loadedClients.data || []);
          actSchedule.customer_id =
            schedule.customer_id || loadedClients.data[0]._id;
        }
      } catch (error) {
        console.tron.log(error);
      }
    }
    loadClients();
    console.tron.log(actSchedule);
    setSchedule(actSchedule);
  }, []);

  function handleChanges(e) {
    if (!datePass)
      setSchedule({ ...schedule, [e.target.name]: e.target.value });
  }

  function handleCancel(e) {
    e.preventDefault();
    history.push('/');
  }

  function handleSave(e) {
    e.preventDefault();

    async function save() {
      try {
        if (schedule._id) {
          await api.put(`schedules/${schedule._id}`, schedule);
          toast.success('Agendamento alterado');
        } else {
          setSchedule({
            ...schedule,
            _id: (await api.post('/schedules/', schedule)).data._id,
          });
          toast.success('Agendamento agendado');
        }
        if (!schedule._id) history.push('/');
      } catch (error) {
        console.tron.log(error.response);
        toast.error('Falha ao salvar o agendamento');
      }
    }
    save();
  }

  return (
    <SingScheduleDiv>
      <strong>Agendar Serviço</strong>

      <div className="divDateTime">
        <div className="divDate">
          <label htmlFor="date">Data</label>
          <DatePicker
            name="date"
            id="date"
            selected={schedule.date_time_start}
            onChange={date =>
              setSchedule({ ...schedule, date_time_start: date })
            }
            readOnly={datePass}
            minDate={actDate}
            locale="pt-BR"
            dateFormat="dd/MM/yyy"
            todayButton="Hoje"
            calendarClassName="calenday"
            preventOpenOnFocus
          />
        </div>

        <div className="divTime">
          <label htmlFor="time">Hora</label>
          <DatePicker
            type="time"
            name="time"
            id="time"
            selected={schedule.date_time_start}
            onChange={time =>
              setSchedule({ ...schedule, date_time_start: time })
            }
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Hora"
            dateFormat="hh:mm"
            locale="pt-BR"
            readOnly={datePass}
            minDate={actDate}
            preventOpenOnFocus
          />
        </div>
      </div>

      <div className="divWork">
        <label htmlFor="services">Serviço</label>
        <select
          htmlFor="services"
          name="service_id"
          onChange={handleChanges}
          value={schedule.service_id || ''}
        >
          {services.map(service => (
            <option key={service._id} id={service._id} value={service._id}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      <div className="divClient">
        <label htmlFor="customer_id">Cliente</label>
        <select
          name="customer_id"
          id="customer_id"
          value={schedule.customer_id || ''}
          onChange={handleChanges}
        >
          {clients.map(client => (
            <option key={client._id} value={client._id}>
              {client.name}
            </option>
          ))}
        </select>
      </div>

      <div className="divSingOptions">
        <button className="btnSave" type="submit" onClick={handleSave}>
          Salvar
        </button>
        <button className="btnCancel" type="submit" onClick={handleCancel}>
          Cancelar
        </button>
      </div>
    </SingScheduleDiv>
  );
}
