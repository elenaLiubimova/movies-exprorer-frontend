import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import account from '../../images/account.svg';

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
          <a className="app-navigation__authorized-link app-navigation__authorized-link_selected">Фильмы</a>
        </li>
        <li className="app-navigation__element">
          <a className="app-navigation__authorized-link">Сохраненные фильмы</a>
        </li>
        <li className="app-navigation__element">
          <a className="app-navigation__authorized-link app-navigation__authorized-link_type_account">Аккаунт
          <img className="app-navigation__authorized-link-logo" src={account} alt="Значок аккаунта" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
