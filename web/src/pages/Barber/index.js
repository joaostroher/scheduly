import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarberStyles } from './styles';

async function handleSubmit() {}

export default function Barber() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <BarberStyles>
      <div className="container">
        <div className="content">
          <strong>BARBER</strong>
        </div>
      </div>
    </BarberStyles>
  );
}
