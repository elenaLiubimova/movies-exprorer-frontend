import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ cards }) => {
  return (
    <section className="movies-container">
      <ul className="movies-container__cards">
        {/* Отрисовка карточек из массива */}
        {cards.map((card, i) => (
          <MoviesCard card={card} key={i} />
        ))}
      </ul>
      <button
        className="movies-container__more-button"
        type="button"
        aria-label="Кнопка 'Еще'"
      >
        <span className="movies-container__more-button-text">Ещё</span>
      </button>
    </section>
  );
};

export default MoviesCardList;
