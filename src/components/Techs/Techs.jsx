import React from 'react';
import './Techs.css';

const Techs = () => {
  return (
    <section className="techs">
      <h2 className="section-title">Технологии</h2>
      <h3 className="techs__title">14 технологий</h3>
      <p className="techs__subtitle">
        Технологии, освоенные на курсе веб-разработки и самостоятельно:
      </p>
      <ul className="techs__cards">
        <li className="techs__card">HTML</li>
        <li className="techs__card">CSS</li>
        <li className="techs__card">SCSS</li>
        <li className="techs__card">JS</li>
        <li className="techs__card">Typescript</li>
        <li className="techs__card">React</li>
        <li className="techs__card">Redux Toolkit</li>
        <li className="techs__card">Git</li>
        <li className="techs__card">Webpack</li>
        <li className="techs__card">Express.js</li>
        <li className="techs__card">mongoDB</li>
        <li className="techs__card">Jest</li>
        <li className="techs__card">Material UI</li>
        <li className="techs__card">БЭМ</li>
      </ul>
    </section>
  );
};

export default Techs;
