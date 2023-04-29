import React from 'react';
import promo from '../../images/promo.svg';
import './Promo.css';
import '../../index.css'

const Promo = () => {
  return (
    <section className='promo container'>
      <div className='promo__info'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a className='promo__learn-more'>Узнать больше</a>
      </div>
      <img className='promo__image' src={promo} alt="Земля из слов web"></img>
    </section>
  );
}

export default Promo;