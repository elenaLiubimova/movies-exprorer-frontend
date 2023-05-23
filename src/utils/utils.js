import { MINUTES_IN_HOUR, SHORT_FILM_MAX_DURATION } from "./constants";

export const timeConverter = (time) => {
  let convertedTime;
  let hours;
  let minutes;

  if (time < MINUTES_IN_HOUR) {
    return `${time}мин`;
  } else {
    hours = Math.trunc(time / MINUTES_IN_HOUR);
    minutes = time - hours * MINUTES_IN_HOUR;
    convertedTime = `${hours}ч${minutes}мин`;
    return convertedTime;
  }
};

export const searchMovies = (movies, searchedMovie) => {
  const searchedMovies = movies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(searchedMovie.toLowerCase())
  );

  return searchedMovies;
};

export const toggleShortMovie = (movies, isShortMovie) => {
  if (isShortMovie) {
    return movies.filter((movie) => movie.duration <= SHORT_FILM_MAX_DURATION);
  } else {
    return movies;
  }
};
