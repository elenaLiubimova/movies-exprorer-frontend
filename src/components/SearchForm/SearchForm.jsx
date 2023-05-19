import './SearchForm.css';
import search from '../../images/search.svg';
import { useFormWithValidation } from '../../hooks/useForm';
import { searchMovies } from '../../utils/utils';
import { useEffect } from 'react';

const SearchForm = ({
  setEnteredToInputMovie,
  isSavedMoviesPage,
  setSavedMovies,
  getSavedMovies,
  setSearchedMovies,
  films,
  isMoviesPage
}) => {
  const { values, setValues, errors, handleChange } = useFormWithValidation({});

  const onSearch = (evt) => {
    evt.preventDefault();
    if (!isSavedMoviesPage) {
      setEnteredToInputMovie(values.search);
      localStorage.setItem(
        'enteredToInputMovie', values.search
      );
      const currentSearchedMovies = searchMovies(films, values.search);
      setSearchedMovies(currentSearchedMovies);
      localStorage.setItem(
        'searchedMovies',
        JSON.stringify(currentSearchedMovies)
      );
    } else {
      setEnteredToInputMovie(values.search);
      getSavedMovies();
      const currentSearchedMovies = searchMovies(films, values.search);
      setSavedMovies(currentSearchedMovies);
    }
  };

  useEffect(() => {
    const searchValueSavedInLocalStorage = localStorage.getItem('enteredToInputMovie');
    isMoviesPage && setValues({search: searchValueSavedInLocalStorage});
  }, []);

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
      {errors.search && (
        <span className="input__error">Нужно ввести ключевое слово</span>
      )}
      <button
        className="input__search-button"
        type="submit"
        aria-label="Кнопка поиска"
        disabled={values.search ? false : true}
      >
        Найти
      </button>
    </form>
  );
};

export default SearchForm;
