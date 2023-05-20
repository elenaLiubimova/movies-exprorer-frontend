import React, { useEffect } from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ isShortFilm, setIsShortFilm, isMoviesPage }) => {
  const onCheck = () => {
    setIsShortFilm(!isShortFilm);
    if (isMoviesPage) {
      localStorage.setItem('filter', !isShortFilm);
    }
    console.log(localStorage);
  };

  useEffect(() => {
    if (isMoviesPage) {
      if (localStorage.getItem('filter') === 'true') {
        setIsShortFilm(true);
      } else {
        setIsShortFilm(false);
      }
    }
  }, [isMoviesPage]);

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
