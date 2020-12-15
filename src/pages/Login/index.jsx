import React, { useState, useContext } from 'react';

/* Components */
import LanguageButton from '../../components/LanguageButton/index.jsx'

/* Styles */
import './styles.styl'

/* i18n  */
import { useTranslation } from 'react-i18next';

/* Axios */
import Axios from 'axios'

import authService from '../../services/auth'

/* JWT */
import JwtDecode from 'jwt-decode'
import { TOKEN, VERIFY } from '../../utils/constants/itemsLocalStorage'
import ROUTES from '../../utils/constants/routes'
import config from '../../../config'

import { Context } from '../../Context'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation(['Login'])
  const source = Axios.CancelToken.source()
  const { Login } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    authService.login(email, password)
      .then((data) => {
        console.debug('data', data)
        Login(data)
        const { confirmed, suspended } = JwtDecode(data.accessToken)
        // localStorage.setItem(TOKEN, data.accessToken)
        localStorage.setItem(
          VERIFY,
          JSON.stringify({ confirmed, suspended })
        )
      })
      .then(() => location.reload())
      .catch((err) => {
        setLoading(false)
        setError(err)
        setEmail('')
        setPassword('')
      })
  }

  return (

    <main className="login">
      <form onSubmit={handleSubmit} action={ROUTES.SIGN_IN} method="POST" className="login__home">
        <div className="login__home--up">
          <h1 className="a">{t('Login:Welcome_to', 'Bienvenido')}</h1>
          <div className="b">
            <h1 className="b_1">Fast</h1>
            <h1 className="b_2">Order</h1>
          </div>
        </div>
        <div className="login__down">
          {error && (
            <span className="login__error">
              {error?.response?.data.message.includes('invalid_credentials') && t('Login:errors.credentials', 'Invalid credentials')}
            </span>
          )}
          <div className="login__down--input">
            <p className="input--title">{t('Login:Email', 'Correo Electronico')}</p>
            {error && (
              <span className="login__error">
                {error?.response?.data.message.includes('email must be an email') && t('Login:errors.email', 'Email should not be empty')}
              </span>
            )}
            <div className="input__box"><i className="fas fa-user"/><input onChange={({ target }) => setEmail(target.value)} name="email" type="email" placeholder={t('Login:Type_your_mail', 'Digite su e-mail')}/></div>
            <p className="input--title">{t('Login:Password', 'Contraseña')}</p>
            {error && (
              <span className="login__error">
                {error?.response?.data.message.includes('password should not be empty') && t('Login:errors.password', 'Password should not be empty')}
              </span>
            )}
            <div className="input__box"><i className="fas fa-lock"/><input onChange={({ target }) => setPassword(target.value)} name="password" type="password" placeholder={t('Login:Type_your_password', 'Digite su contraseña')}/></div>
          </div>
          <button type="submit" className="login__down--button">{t('Login:SignIn', 'Ingresar')}</button>
          <LanguageButton />
        </div>
      </form>
    </main>
  );
};

export default Login;
