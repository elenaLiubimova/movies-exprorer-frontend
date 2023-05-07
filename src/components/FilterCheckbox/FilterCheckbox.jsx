import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <div className="checkbox-container">
      <button className="checkbox">
        <div className="checkbox__toggler" />
      </button>
      <p className="checkbox__description">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
