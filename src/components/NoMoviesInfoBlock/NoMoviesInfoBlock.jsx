import React from 'react';
import './NoMoviesInfoBlock.css';

const NoMoviesInfoBlock = ({ infoMessage }) => {
  return (
    <section className="no-movies-info-block">
      <p className="no-movies-info-block__message">{infoMessage}</p>
    </section>
  );
}

export default NoMoviesInfoBlock;