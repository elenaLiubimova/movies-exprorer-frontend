import React from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import '../../index.css';
import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <img className="logo" src={logo} alt="Лого сервиса Movies Explorer" />
      <Navigation />
    </header>
  );
};

export default Header;
