import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ isShortFilm,
  setIsShortFilm }) => {

  const onCheck = () => {
    setIsShortFilm(!isShortFilm);
    // localStorage.setItem('filter', isShortFilm);
  };

  return (
    <div className="checkbox-container">
      <button
        className={isShortFilm ? `checkbox checkbox_checked` : `checkbox`}
        type="button"
        aria-label="Кнопка переключения фильмов"
        onClick={onCheck}
      >
        <span className="checkbox__toggler" />
      </button>
      <p className="checkbox__description">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
