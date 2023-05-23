import './SearchForm.css';
import search from '../../images/search.svg';
import { useFormWithValidation } from '../../hooks/useForm';
import { useEffect } from 'react';

const SearchForm = ({
  isMoviesPage,
  setIsSearch,
  onSearchMovies,
  isLoading,
}) => {
  const { values, setValues, errors, handleChange } = useFormWithValidation({});

  const onSearch = (evt) => {
    evt.preventDefault();
    onSearchMovies(values.search);
  };

  useEffect(() => {
    const searchValueSavedInLocalStorage = localStorage.getItem(
      'enteredToInputMovie'
    );
    isMoviesPage && setValues({ search: searchValueSavedInLocalStorage });
    setIsSearch(false);
  }, [isMoviesPage]);

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
        disabled={isLoading}
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
