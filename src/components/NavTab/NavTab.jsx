import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';
import account from '../../images/account.svg';

const NavTab = ({ popup, loggedIn, closePopup }) => {
  return (
    <ul
      className={popup ? `nav-tab__list  nav-tab__list_popup` : `nav-tab__list`}
    >
      {!loggedIn && (
        <li className="nav-tab__element">
          <Link to="/signup" className="nav-tab__unauthorized-link">
            Регистрация
          </Link>
        </li>
      )}
      {!loggedIn && (
        <li className="nav-tab__element">
          <Link
            to="/signin"
            className="nav-tab__unauthorized-link nav-tab__unauthorized-link_selected"
          >
            Войти
          </Link>
        </li>
      )}
      {loggedIn && (
        <li className="nav-tab__element">
          <Link
            to="/"
            className={
              popup
                ? `nav-tab__authorized-link`
                : `nav-tab__authorized-link nav-tab__authorized-link-width-768`
            }
          >
            Главная
          </Link>
        </li>
      )}
      {loggedIn && (
        <li className="nav-tab__element">
          <Link
            to="/movies"
            className="nav-tab__authorized-link nav-tab__authorized-link_selected"
            onClick={closePopup}
          >
            Фильмы
          </Link>
        </li>
      )}
      {loggedIn && (
        <li className="nav-tab__element" onClick={closePopup}>
          <Link to="/saved-movies" className="nav-tab__authorized-link">
            Сохраненные фильмы
          </Link>
        </li>
      )}
      {loggedIn && (
        <li className="nav-tab__element" onClick={closePopup}>
          <Link
            to="/profile"
            className="nav-tab__authorized-link nav-tab__authorized-link_type_account"
          >
            <span className="nav-tab__authorized-link-text">Аккаунт</span>
            <img
              className="nav-tab__authorized-link-logo"
              src={account}
              alt="Значок аккаунта"
            />
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavTab;
