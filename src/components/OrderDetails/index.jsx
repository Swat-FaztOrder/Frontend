import React from 'react'
import waiter from '../../assets/waiter.png'

/* i18n  */
import { useTranslation } from 'react-i18next';

import './styles.styl'

const OrderDetails = () => {
  const { t } = useTranslation(['OrderDetails'])

  return (
    <div className="orderDetails">
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
    </div>
  )
}

export default OrderDetails
