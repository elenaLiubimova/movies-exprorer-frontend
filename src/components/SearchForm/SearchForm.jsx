import React, { useState } from 'react';
import './SearchForm.css';
import search from '../../images/search.svg';

const SearchForm = ({ searchMovies, searchedFilm, setSearchedFilm }) => {
  const [inputValue, setInputValue] = useState('');
  
  const onChangeInput = (evt) => {
    setInputValue(evt.target.value);
  };

  const onSearch = () => {
    setSearchedFilm(inputValue);
    searchMovies();
  }

  return (
    <div className="input">
      <img className="input__icon" src={search} alt="Иконка поиска" />
      <input
        className="input__field"
        placeholder="Фильм"
        onChange={onChangeInput}
      />
      <button
        className="input__search-button"
        type="button"
        aria-label="Кнопка поиска"
        onClick={onSearch}
      >
        Найти
      </button>
    </div>
  );
};

export default SearchForm;
