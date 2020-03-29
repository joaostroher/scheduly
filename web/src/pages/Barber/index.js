import React, { useState } from 'react';
import { BarberStyles } from './styles';
import { Link } from 'react-router-dom';

async function handleSubmit(){
  
}

export default function Barber() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <BarberStyles>
    <div className = "container">
    <div className = "content">
      <strong>BARBER</strong>
    </div>
    </div>
    </BarberStyles>
);
}
