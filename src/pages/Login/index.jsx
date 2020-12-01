import React from 'react';


/* Components */
import LanguageButton from '../../components/LanguageButton/index'
//import { Link } from 'react-router-dom';
import './styles.styl'

/* i18n  */
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation(['Login'])

  return (
    <main className="login">
      <div className="login__home">
        <div className="login__home--up">
          <h1 className="login__home--up a">{t('Login:Welcome_to', 'Bienvenido')}</h1>
          <div className="login__home--up b">
            <h1 className="b_1">Fast</h1>
            <h1 className="b_2">Order</h1>
          </div>
        </div>
        <div className="login__down">
          <div className="login__down--input">
            <p className="input--title">{t('Login:Email', 'Correo Electronico')}</p>
            <div className="input__box"><i className="fas fa-user"/><input placeholder={t('Login:Type_your_mail', 'Digite su e-mail')}></input></div>
            <p className="input--title">{t('Login:Password', 'Contraseña')}</p>
            <div className="input__box"><i className="fas fa-lock"/><input placeholder={t('Login:Type_your_password', 'Digite su contraseña')}></input></div>
          </div>
          <button className="login__down--button">{t('Login:SignIn', 'Ingresar')}</button>
          <LanguageButton />
        </div>
      </div>
    </main>
  );
}; 

export default Login;