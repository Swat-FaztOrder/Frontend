import React from 'react'

/* i18n  */
import { useTranslation } from 'react-i18next';

import './styles.styl'

const NewDetails = () => {
  const { t } = useTranslation(['NewDetails'])

  return (
    <div className="New">
      <div className="New__data">
        <div className="New__data--image">
          <i class="fas fa-plus"/>
        </div>
        <div className="New__data--container">
          <p className="container__input">Nombre 
            <input placeholder="Type your name"></input>
          </p>
          <p className="container__input">Categoria 
            <input type="submit" className="container__input" value="Cheff"></input>
          </p>
          <p className="container__input">E-mail 
            <input placeholder="Type your E-mail"></input>
          </p>
          <p className="container__input">Password 
            <input placeholder="Type your Password"></input>
          </p>
        </div>
      </div>
      <div className="New__buttons">
        <button className="New__buttons--add">Add</button>
      </div>
    </div>
  )
}

export default NewDetails
