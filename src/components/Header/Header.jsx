import React from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import { Link } from 'react-router-dom';
import BurgerButton from '../BurgerButton/BurgerButton';

const Header = ({
  popup,
  openPopup,
  isPopupOpen,
  loggedIn,
  setloggedIn,
  closePopup,
  isShowNavigation,
}) => {
  return (
    <header className={loggedIn ? 'header' : 'header header_unauthorized'}>
      <Link to="/">
        <img className="logo" src={logo} alt="Лого сервиса Movies Explorer" />
      </Link>
      <div
        className={
          isShowNavigation
            ? `header__navigation`
            : `header__navigation header__navigation_hidden`
        }
      >
        <Navigation
          popup={popup}
          isPopupOpen={isPopupOpen}
          openPopup={openPopup}
          loggedIn={loggedIn}
          setloggedIn={setloggedIn}
          closePopup={closePopup}
        />
      </div>
      {loggedIn && (
        <BurgerButton openPopup={openPopup} isPopupOpen={isPopupOpen} />
      )}
    </header>
  );
};

export default Header;
