import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="app-navigation">
      <ul className="app-navigation__list">
        <li className="app-navigation__element">
          <a className="app-navigation__unauthorized-link">Регистрация</a>
        </li>
        <li className="app-navigation__element">
          <a className="app-navigation__unauthorized-link app-navigation__unauthorized-link_selected">Войти</a>
        </li>
        <li className="app-navigation__element">
          <a className="app-navigation__authorized-link">Фильмы</a>
        </li>
        <li className="app-navigation__element">
          <a className="app-navigation__authorized-link">Сохраненные фильмы</a>
        </li>
        <li className="app-navigation__element">
          <a className="app-navigation__authorized-link">Аккаунт</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
