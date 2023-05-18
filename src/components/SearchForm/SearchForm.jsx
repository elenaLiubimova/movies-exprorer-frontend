import './SearchForm.css';
import search from '../../images/search.svg';
import { useFormWithValidation } from '../../hooks/useForm';
import { useEffect } from 'react';

const SearchForm = ({ searchMovies, setSearchedFilm, isSavedMoviesPage, filterFilms, savedMovies, setSavedMovies, searchedFilm, searchSavedMovies, setFilteredMovies, films }) => {
  const { values, setValues, errors, handleChange } = useFormWithValidation({});

  const onSearch = (evt) => {
    evt.preventDefault();
    if (!isSavedMoviesPage) {
      setSearchedFilm(values.search);
      // localStorage.setItem('search', values.search);
      searchMovies();
      setFilteredMovies(filterFilms(films));
    } else {
      setSearchedFilm(values.search);
      // const filteredSavedMovies = filterFilms(savedMovies);
      // setSavedMovies(filteredSavedMovies);
      searchSavedMovies();
    }
  };

  return (
    <form className="input" onSubmit={onSearch} noValidate>
      <img className="input__icon" src={search} alt="Иконка поиска" />
      <input
        className="input__field"
        type="text"
        name="search"
        value={values.search || ''}
        placeholder="Фильм"
        onChange={handleChange}
        minLength="1"
        required
      />
      {errors.search && <span className="input__error">Нужно ввести ключевое слово</span>}
      <button
        className="input__search-button"
        type="submit"
        aria-label="Кнопка поиска"
        disabled={(values.search) ? false : true}
      >
        Найти
      </button>
    </form>
  );
};

export default SearchForm;
