import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/schedules" className="link">
        Home
      </Link>
      <Link to="/customers" className="link">
        Clientes
      </Link>
      <Link to="/services" className="link">
        Serviços
      </Link>
    </Container>
  );
}

export default Header;
