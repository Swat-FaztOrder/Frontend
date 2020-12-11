import React from 'react';

/* i18n  */
import { useTranslation } from 'react-i18next';

/* styles */
import './styles.styl';

const ItemDetails = ({ image, title, details, price }) => {

  const { t } = useTranslation(['ItemDetails'])

  return (
    <div className="itemDetails">
      <i className="fas fa-arrow-circle-left" />
      <div className="itemDetails__image">
        <img src={image} alt="" />
      </div>
      <h2 className="itemDetails__title">
        {title}
      </h2>
      <p className="itemDetails__details">
        {details}
      </p>
      <h3 className="itemDetails__price">
        ${price}
      </h3>
      <button className="itemDetails__addOrder">
        {t('ItemDetails:order', 'Add to order')}
      </button>
    </div>
  )
}

export default ItemDetails;
