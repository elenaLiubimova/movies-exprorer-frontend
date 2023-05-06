import React, { useContext } from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import '../../index.css';
import './Header.css';
import { AppContext } from '../../contexts/AppContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { setLoggedIn, loggedIn } = useContext(AppContext);
  // setLoggedIn(false);

  return (
    <header
      className={
        loggedIn ? 'header container' : 'header header_unauthorized container'
      }
    >
      <Link to="/">
        <img className="logo" src={logo} alt="Лого сервиса Movies Explorer" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
