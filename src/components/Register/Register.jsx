import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.svg';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useForm';

const Register = ({ handleRegister }) => {
  const { values, isValid, errors, handleChange } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!values.name || !values.email || !values.password) {
      return;
    }
    handleRegister(values.name, values.email, values.password);
  };

  return (
    <main className="register">
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <Link to="/">
          <img className="logo" src={logo} alt="Лого сервиса Movies Explorer" />
        </Link>
        <h2 className="register-form__title">Добро пожаловать!</h2>
        <label className="register-form__field">
          Имя
          <input
            className="register-form__item"
            name="name"
            placeholder="Имя"
            value={values.name || ''}
            onChange={handleChange}
            minLength="2"
            maxLength="30"
            required
          />
          <span className="register-form__item-error name-input-error">{errors.name}</span>
        </label>
        <label className="register-form__field">
          E-mail
          <input
            className="register-form__item"
            type="email"
            name="email"
            placeholder="Email"
            value={values.email || ''}
            onChange={handleChange}
            required
          />
          <span className="register-form__item-error email-input-error">{errors.email}</span>
        </label>
        <label className="register-form__field">
          Пароль
          <input
            className="register-form__item"
            type="password"
            placeholder="Пароль"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            required
          />
          <span className="register-form__item-error email-input-error">{errors.password}</span>
        </label>
        <button
          className="register-form__button"
          type="submit"
          aria-label="Кнопка регистрации"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
        <span className="register-form__description">
          Уже зарегистрированы?
          <Link to="/signin" className="register-form__link">
            Войти
          </Link>
        </span>
      </form>
    </main>
  );
};

export default Register;
