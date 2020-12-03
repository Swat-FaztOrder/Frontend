import React from 'react'

/* i18n  */
import { useTranslation } from 'react-i18next';

import './styles.styl'

const DeletePeopleModal = () => {
  const { t } = useTranslation(['AddModalDetails'])

  return (
    <div className="DeleteModal">
      <h1 className="DeleteModal__title">User Deleted!!!</h1>
      <div className="DeleteModal__data">
        <div className="DeleteModal__data--image">
          <i class="fas fa-user-slash"/>
        </div>
        <div className="DeleteModal__data--container">
          <p className="container__p">Diego Valdez</p>
          <p className="container__p">{t('DeleteModalDetails:Cheff', 'Cocinero')}</p>
        </div>
      </div>
      <p className="DeleteModal__title">Your deleted employee</p>
    </div>
  )
}

export default DeletePeopleModal