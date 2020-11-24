import React from 'react'

/* i18n  */
import { useTranslation } from 'react-i18next';

/* Styles */
import './styles.styl'

const MenuCategories = () => {
  const { t } = useTranslation(['MenuCategories'])

  return (
    <div className="menuCategories">
      <div className="menuCategories__popular">
        <i className="fas fa-star" />
        <h1>{t('MenuCategories:Popular', 'Popular')}</h1>
      </div>
      <div className="menuCategories__fast">
        <i className="fas fa-hamburger" />
        <h1>{t('MenuCategories:FastFood', 'Fast Food')}</h1>
      </div>
      <div className="menuCategories__dessert">
        <i className="fas fa-ice-cream" />
        <h1>{t('MenuCategories:Dessert', 'Dessert')}</h1>
      </div>
      <div className="menuCategories__beverages">
        <i className="fas fa-glass-martini" />
        <h1>{t('MenuCategories:Beverages', 'Beverages')}</h1>
      </div>
      <div className="menuCategories__starter">
        <i className="fas fa-bread-slice" />
        <h1>{t('MenuCategories:Starter', 'Starter')}</h1>
      </div>
      <div className="menuCategories__extras">
        <i className="fas fa-cookie-bite" />
        <h1>{t('MenuCategories:Extras', 'Extras')}</h1>
      </div>
    </div>
  )
}

export default MenuCategories;
