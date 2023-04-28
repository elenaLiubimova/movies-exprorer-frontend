import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="app-navigation">
      <a>Регистрация</a>
      <a>Войти</a>
    </nav>
  );
}

export default Navigation;