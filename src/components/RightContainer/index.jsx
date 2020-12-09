import React, { useContext } from 'react'
import waiter from '../../assets/waiter.png'

/* i18n  */
import { useTranslation } from 'react-i18next';

/* Context */
import { Context } from '../../Context'

import './styles.styl'

const RightContainer = () => {
  const { t } = useTranslation(['OrderDetails'])
  const { actionLayout, setActionLayout, ActionTypes } = useContext(Context)

  return (
    <div className="orderDetails">
      {actionLayout === ActionTypes.BASE &&
    <>
      <img src={waiter} alt="" />
      <div className="orderDetails__waiter">
        <span>{t('OrderDetails:Waiter', 'Waiter')}</span>
        <h2>Diego Valdez Acosta</h2>
      </div>
      <div className="orderDetails__table">
        <span>{t('OrderDetails:Table', 'Table')}</span>
        <h2>8</h2>
      </div>
      <button>{t('OrderDetails:Finish', 'Finish order')}</button>
    </>
      }
    </div>
  )
}

export default RightContainer
