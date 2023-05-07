import React from 'react';
import './BurgerButton.css';

const BurgerButton = () => {
  return (
    <button className="burger-button" type="button">
      <span className="burger-button__field">
        <span className="burger-button__item"></span>
        <span className="burger-button__item"></span>
        <span className="burger-button__item"></span>
      </span>
    </button>
  );
};

export default BurgerButton;
