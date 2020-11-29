import React from 'react';

import { useTranslation } from 'react-i18next';

/* Components */
import LanguageButton from '../../components/LanguageButton/index'
//import { Link } from 'react-router-dom';
import './styles.styl'

/* i18n  */
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation(['login'])

  return (
    <main className="login">
      <div className="login__up">
        <div className="login__up--title">
          <h1 className="title a">{t('login:welcome', 'Welcome to')}</h1>
          <div className="title b">
            <h1 className="b_1">Fast</h1>
            <h1 className="b_2">Order</h1>
          </div>
        </div>
        <div className="login__down">
          <div className="login__down--input">
            <p className="input--title">Email Address</p>
            <div className="input__box"><i className="fas fa-user"/><input placeholder="Type your mail" /></div>
            <p className="input--title">Password</p>
            <div className="input__box"><i className="fas fa-lock"/><input placeholder="Type your password" /></div>
          </div>
          <button className="login__down--button">{t('Login:SignIn', 'Ingresar')}</button>
          <LanguageButton />
        </div>
      </div>
    </main>
  );
};

export default Login;
