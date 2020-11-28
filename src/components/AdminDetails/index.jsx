import React from 'react'
import waiter from '../../assets/waiter.png'

/* i18n  */
import { useTranslation } from 'react-i18next';

import './styles.styl'

const AdminDetails = () => {
  const { t } = useTranslation(['AdminDetails'])

  return (
    <div className="Admin">
      <div className="Admin__logo">
        <img src={waiter} alt="" />
      </div>
      <div className="Admin__container">
        <span className="a">{t('AdminDetails:Administrador', 'Administrador')}</span>
        <h2 className="b">Diego Valdez Acosta</h2>
        <span className="a">{t('AdminDetails:Restaurante', 'Restaurante')}</span>
        <h2 className="b">La cocina del Fast-Order</h2>
      </div>
    </div>
  )
}

export default AdminDetails