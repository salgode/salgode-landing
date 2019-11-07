import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundView = () => (
  <div>
    404 Página no encontrada, vuelve a
    {' '}
    <Link href="/"> Inicio </Link>
  </div>
);

export default NotFoundView;
