import React from 'react';
import './BurgerButton.css';

const BurgerButton = ({ openPopup }) => {
  return (
    <button
      className="burger-button"
      type="button"
      aria-label="Кнопка меню"
      onClick={openPopup}
    >
      <span className="burger-button__field">
        <span className="burger-button__item"></span>
        <span className="burger-button__item"></span>
        <span className="burger-button__item"></span>
      </span>
    </button>
  );
};

export default BurgerButton;
