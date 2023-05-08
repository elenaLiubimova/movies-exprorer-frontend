import React from 'react';
import './Navigation.css';
import NavTab from '../NavTab/NavTab';

const Navigation = ({ loggedIn, setloggedIn, closePopup }) => {
  return (
    <nav className="app-navigation">
      <NavTab
        loggedIn={loggedIn}
        setloggedIn={setloggedIn}
        closePopup={closePopup}
      />
    </nav>
  );
};

export default Navigation;
