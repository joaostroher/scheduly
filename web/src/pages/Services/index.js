import React, { useState } from 'react';
import { ServicesStyles } from './styles';
import { Link } from 'react-router-dom';

async function handleSubmit(){
}

export default function Services() {
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  return (
    <ServicesStyles>
    <div className = "container">
    <div className = "content">
    <p>
      <strong>Agendar Serviço</strong>
    </p>
    <form onSubmit={handleSubmit}>
      <label>SERVIÇO</label>
      <select>
        <option>CORTE DE CABELO R$30,00/30min</option>
        <option>BARBA R$27,00/30min</option>
        <option>CABELO + BARBA R$57,00/30min</option>
        <option>BARBOTERAPIA R$35,00/30min</option>
        <option>BARBOTERAPIA + CABELO R$65,00/60min</option>
        <option>CORTE MÁQUINA R$20,00/30min</option>
      </select>
      <label>ESCOLHA UM DIA</label>
      <input 
        id="date" 
        type="date" 
        value={date}
        onChange={event => setDate(event.target.value)}
      />
      <label>ESCOLHA UM HORÁRIO</label>
      <select>
        <option>08:00</option>
        <option>08:30</option>
        <option>09:00</option>
        <option>09:30</option>
        <option>10:00</option>
        <option>10:30</option>
        <option>11:00</option>
        <option>11:30</option>
        <option>13:30</option>
        <option>14:00</option>
        <option>14:30</option>
        <option>15:00</option>
        <option>15:30</option>
        <option>16:00</option>
        <option>16:30</option>
        <option>17:00</option>
        <option>17:30</option>
      </select>
      <button className="btn" type="submit">Agendar</button>
    </form>
    </div>
    </div>
    </ServicesStyles>
);
}
