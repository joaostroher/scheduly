import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '~/class/customerClass';

// import { Container } from './styles';

export default function Home() {
  return (
    <div>
      <Link to="/login" onClick={logout()}>
        Sair
      </Link>
    </div>
  );
}
