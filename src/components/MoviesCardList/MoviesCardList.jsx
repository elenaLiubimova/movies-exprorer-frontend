import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({
  films,
  searchedFilm,
  isShortFilm,
  handleAddToSaved,
}) => {
  const toggleShortFilm = (films) => {
    if (isShortFilm) {
      return films.filter((film) => film.duration <= 40);
    } else return films;
  };

  return (
    <section className="movies-container">
      <ul className="movies-container__cards">
        {toggleShortFilm(films)
          .filter((film) =>
            film.nameRU.toLowerCase().includes(searchedFilm.toLowerCase())
          )
          .map((film) => (
            <MoviesCard
              film={film}
              key={film.id}
              handleAddToSaved={handleAddToSaved}
            />
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
