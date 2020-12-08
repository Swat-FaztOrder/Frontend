import React from 'react'

import PeopleCard from '../PeopleCard/index.jsx'

/* i18n  */
import { useTranslation } from 'react-i18next';

import './styles.styl'

const UpdatePeopleModal = () => {
  const { t } = useTranslation(['UpdateModalDetails'])

  return (
    <div className="UpdateModal">
      <h1 className="UpdateModal__title">User updated!!!</h1>
      <div className="UpdateModal__data">
        <div className="UpdateModal__data--image">
          <PeopleCard image="https://images.pexels.com/photos/4871397/pexels-photo-4871397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="UpdateModal__data--container">
          <p className="container__p">Diego Valdez</p>
          <p className="container__p">{t('UpdateModalDetails:Cheff', 'Cocinero')}</p>
        </div>
      </div>
      <p className="UpdateModal__title">Your updated user will be available in the people menu</p>
    </div>
  )
}

export default UpdatePeopleModal
