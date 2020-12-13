import React, { useState, useContext } from 'react'

import PeopleCard from '../PeopleCard/index.jsx'

/* i18n  */
import { useTranslation } from 'react-i18next';

/* Context */
import { Context } from '../../Context'

import './styles.styl'

const PeopleDetails = () => {
  const { t } = useTranslation(['PeopleDetails'])

  const [modalIsOpen, setmodalIsOpen] = useState(false)
  const { updateAction, ActionTypes } = useContext(Context)

  return (
    <div className="People">
      <i onClick={() => updateAction(ActionTypes.BASE)} className="fas fa-arrow-circle-left" />
      <div className="People__data">
        <div className="People__data--image">
          <PeopleCard image="https://images.pexels.com/photos/4871397/pexels-photo-4871397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="People__data--container">
          <p className="container__input">{t('PeopleDetails:Names', 'Nombres')}
            <input placeholder={t('PeopleDetails:Type_your_name', 'Digite su nombre')}/>
          </p>
          <p className="container__input">{t('PeopleDetails:Category', 'Categoria')}
            <input type="submit" className="container__input" value={t('PeopleDetails:Cheff', 'Cocinero')}/>
          </p>
          <p className="container__input">{t('PeopleDetails:Mail', 'Correo')}
            <input placeholder={t('PeopleDetails:Type_your_mail', 'Digite su mail')}/>
          </p>
          <p className="container__input">{t('PeopleDetails:Password', 'Contraseña')}
            <input placeholder={t('PeopleDetails:Type_your_password', 'Digite su contraseña')}/>
          </p>
        </div>
      </div>
      <div className="People__buttons">
        <button onClick={() => setmodalIsOpen(true)} className="People__buttons--update" >
          {t('PeopleDetails:Update', 'Actualizar')}
        </button>
        <button onClick={() => setmodalIsOpen(true)} className="People__buttons--delete">
          {t('PeopleDetails:Delete', 'Borrar')}
        </button>
        <button
          onClick={() => setmodalIsOpen(true)}
          className="People__buttons--add"
        >{t('NewDetails:Add', 'Agregar')}</button>
      </div>
    </div>
  )
}

export default PeopleDetails
