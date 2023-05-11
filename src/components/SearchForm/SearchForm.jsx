import React from 'react';
import './SearchForm.css';
import search from '../../images/search.svg';

const SearchForm = () => {
  return (
    <form className="input">
      <img className="input__icon" src={search} alt="Иконка поиска" />
      <input className="input__field" placeholder="Фильм" />
      <button
        className="input__search-button"
        type="submit"
        aria-label="Кнопка поиска"
      >
        Найти
      </button>
    </form>
  );
};

export default SearchForm;
