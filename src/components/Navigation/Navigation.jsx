import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import account from '../../images/account.svg';
import { AppContext } from '../../contexts/AppContext';

const Navigation = () => {
  const { loggedIn } = useContext(AppContext);

  return (
    <nav className="app-navigation">
      <ul className="app-navigation__list">
        {!loggedIn && (
          <li className="app-navigation__element">
            <Link to="/signup" className="app-navigation__unauthorized-link">Регистрация</Link>
          </li>
        )}
        {!loggedIn && (
          <li className="app-navigation__element">
            <Link to="/signin" className="app-navigation__unauthorized-link app-navigation__unauthorized-link_selected">
              Войти
            </Link>
          </li>
        )}
        {loggedIn && (
          <li className="app-navigation__element">
            <a className="app-navigation__authorized-link app-navigation__authorized-link_selected">
              Фильмы
            </a>
          </li>
        )}
        {loggedIn && (
          <li className="app-navigation__element">
            <a className="app-navigation__authorized-link">
              Сохраненные фильмы
            </a>
          </li>
        )}
        {loggedIn && (
          <li className="app-navigation__element">
            <a className="app-navigation__authorized-link app-navigation__authorized-link_type_account">
              <span className="app-navigation__authorized-link-text">
                Аккаунт
              </span>
              <img
                className="app-navigation__authorized-link-logo"
                src={account}
                alt="Значок аккаунта"
              />
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
