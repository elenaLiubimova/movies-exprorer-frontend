export const timeConverter = (time) => {
  let convertedTime;
  let hours;
  let minutes;

  if (time < 60) {
    return `${time}мин`;
  } else {
    hours = Math.trunc(time / 60);
    minutes = time - (hours * 60);
    convertedTime = `${hours}ч${minutes}мин`
    return convertedTime;
  }
}

export const searchMovies = (movies, searchedMovie) => {
  const searchedMovies = movies.filter((movie) =>
  movie.nameRU.toLowerCase().includes(searchedMovie.toLowerCase())
  );

  return searchedMovies;
};

export const toggleShortMovie = (movies, isShortMovie) => {
  if (isShortMovie) {
    return movies.filter((movie) => movie.duration <= 40);
  } else {
    return movies;
  }
};