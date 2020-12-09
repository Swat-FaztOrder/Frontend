import React from 'react'

import './styles.styl'

/* i18n  */
import { useTranslation } from 'react-i18next';

const OrderDetails = ({ handleButton, Button = 'false', image, title1, title2, subtitle1, subtitle2 }) => {
  const { t } = useTranslation(['OrderDetails'])

  return (
    <div className="orderDetails">
      <img src={image} alt="" />
      <div className="orderDetails__waiter">
        <span>{subtitle1}</span>
        <h2>{title1}</h2>
      </div>
      <div className="orderDetails__table">
        <span>{subtitle2}</span>
        <h2>{title2}</h2>
      </div>
      {Button === 'true' &&
        <button onClick={handleButton}>{t('OrderDetails:Finish', 'Finish order')}</button>
      }
    </div>
  )
}

export default OrderDetails
