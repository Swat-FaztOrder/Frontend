import React, { useState } from 'react'

/* i18n  */
import { useTranslation } from 'react-i18next';

import './styles.styl'

const NewDetails = () => {
  const { t } = useTranslation(['NewDetails'])

  const [modalIsOpen, setmodalIsOpen] = useState(false)

  return (
    <div className="New">
      <div className="New__data">
        <div className="New__data--image">
          <i className="fas fa-plus"/>
        </div>
        <div className="New__data--container">
          <p className="container__input">{t('NewDetails:Names', 'Nombres')}
            <input placeholder={t('NewDetails:Type_your_name', 'Digite su nombre')}/>
          </p>
          <p className="container__input">{t('NewDetails:Category', 'Categoria')}
            <input type="submit" className="container__input" value={t('NewDetails:Cheff', 'Cocinero')}/>
          </p>
          <p className="container__input">{t('NewDetails:Mail', 'Correo')}
            <input placeholder={t('NewDetails:Type_your_mail', 'Digite su mail')}/>
          </p>
          <p className="container__input">{t('NewDetails:Password', 'Contraseña')}
            <input placeholder={t('NewDetails:Type_your_password', 'Digite su contraseña')}/>
          </p>
        </div>
      </div>
      <div className="New__buttons">
        <button
          onClick={() => setmodalIsOpen(true)}
          className="New__buttons--add"
        >{t('NewDetails:Add', 'Add')}</button>
      </div>
    </div>
  )
}

export default NewDetails
