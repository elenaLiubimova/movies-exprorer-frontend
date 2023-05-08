import React, { useState } from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <button
        className={isChecked ? `checkbox checkbox_checked` : `checkbox`}
        type="button"
        aria-label="Кнопка переключения фильмов"
        onClick={onCheck}
      >
        <div className="checkbox__toggler" />
      </button>
      <p className="checkbox__description">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
