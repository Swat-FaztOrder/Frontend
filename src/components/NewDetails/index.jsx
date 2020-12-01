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
          <p className="container__input">{t('NewDetails:Names', 'Nombres')} 
            <input placeholder={t('NewDetails:Type_your_name', 'Digite su nombre')}></input>
          </p>
          <p className="container__input">{t('NewDetails:Category', 'Categoria')} 
            <input type="submit" className="container__input" value={t('NewDetails:Cheff', 'Cocinero')}></input>
          </p>
          <p className="container__input">{t('NewDetails:Mail', 'Correo')} 
            <input placeholder={t('NewDetails:Type_your_mail', 'Digite su mail')}></input>
          </p>
          <p className="container__input">{t('NewDetails:Password', 'Contraseña')}
            <input placeholder={t('NewDetails:Type_your_password', 'Digite su contraseña')}></input>
          </p>
        </div>
      </div>
      <div className="New__buttons">
        <button className="New__buttons--add">{t('NewDetails:Add', 'Agregar')}</button>
      </div>
    </div>
  )
}

export default NewDetails
