import React, { useState } from 'react'

import PeopleCard from '../PeopleCard/index.jsx'

/* i18n  */
import { useTranslation } from 'react-i18next';

import './styles.styl'

const PeopleDetails = () => {
  const { t } = useTranslation(['PeopleDetails'])

  const [
    modalIsOpen,
    setmodalIsOpen
  ] = useState(false)

  return (
    <div className="People">
      <div className="People__data">
        <div className="People__data--image">
          <PeopleCard image="https://images.pexels.com/photos/4871397/pexels-photo-4871397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="People__data--container">
          <p className="container__input">{t('PeopleDetails:Names', 'Nombres')}
            <input placeholder={t('PeopleDetails:Type_your_name', 'Digite su nombre')}></input>
          </p>
          <p className="container__input">{t('PeopleDetails:Category', 'Categoria')}
            <input type="submit" className="container__input" value={t('PeopleDetails:Cheff', 'Cocinero')}></input>
          </p>
          <p className="container__input">{t('PeopleDetails:Mail', 'Correo')}
            <input placeholder={t('PeopleDetails:Type_your_mail', 'Digite su mail')}></input>
          </p>
          <p className="container__input">{t('PeopleDetails:Password', 'Contraseña')}
            <input placeholder={t('PeopleDetails:Type_your_password', 'Digite su contraseña')}></input>
          </p>
        </div>
      </div>
      <div className="People__buttons">
        <button
          onClick = {() => setmodalIsOpen(true)}
          className="People__buttons--update"
        >{t('PeopleDetails:Update', 'Actualizar')}</button>
        <button
          onClick = {() => setmodalIsOpen(true)}
          className="People__buttons--delete"
        >{t('PeopleDetails:Delete', 'Borrar')}</button>
      </div>
    </div>
  )
}

export default PeopleDetails
