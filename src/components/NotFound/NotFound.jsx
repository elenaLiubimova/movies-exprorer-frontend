import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <main className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__description">Страница не найдена</p>
      <a className="notFound__back">Назад</a>
    </main>
  );
}

export default NotFound;