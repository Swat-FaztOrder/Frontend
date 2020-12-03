import React from 'react'
import PeopleCard from '../PeopleCard/index.jsx'

/* i18n  */
import { useTranslation } from 'react-i18next';

import './styles.styl'

const AddPeopleModal = () => {
  const { t } = useTranslation(['AddModalDetails'])

  return (
    <div className="AddModal">
      <h1 className="AddModal__title">User added!!!</h1>
      <div className="AddModal__data">
        <div className="AddModal__data--image">
          <PeopleCard image="https://images.pexels.com/photos/4871397/pexels-photo-4871397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="AddModal__data--container">
          <p className="container__p">Diego Valdez</p>
          <p className="container__p">{t('AddModalDetails:Cheff', 'Cocinero')}</p>
        </div>
      </div>
      <p className="AddModal__title">Your added user will be available to login right now</p>
    </div>
  )
}

export default AddPeopleModal