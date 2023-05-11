import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__description">Страница не найдена</p>
      <a className="notFound__back" onClick={() => navigate(-1)}>
        Назад
      </a>
    </main>
  );
};

export default NotFound;
