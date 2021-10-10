import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Header />
      Página no encontrada. Ir a <Link to="/dashboard">La pagina de inicio</Link>
    </React.Fragment>
  );
};
export default NotFoundPage;