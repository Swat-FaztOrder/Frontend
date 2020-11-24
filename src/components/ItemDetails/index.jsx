import React from 'react';

/* i18n  */
import { useTranslation } from 'react-i18next';

/* styles */
import './styles.styl';

const ItemDetails = ({ extras, image, title, details, price }) => {
  const { t } = useTranslation(['ItemDetails'])

  return (
    <div className="itemDetails">
      <div className="itemDetails__image">
        <img src="https://i.imgur.com/gfMP09b.jpg" alt="" />
        <i className="fas fa-arrow-circle-left" />
      </div>
      <h2 className="itemDetails__title">{title}</h2>
      <div className="itemDetails__subtitle">
        <div className="itemDetails__subtitle--details">
          <p>{details}</p>
        </div>
        <div className="itemDetails__subtitle--price">
          <h3>${price}</h3>
        </div>
      </div>
      <span>{t('ItemDetails:add', 'ADD OPTIONS')}</span>
      <div className="itemDetails__extras">
        <div className="itemDetails__extras--line">
          <div className="itemDetails__extras--lineLeft">
            <input className="checkbox" type="checkbox" id="cbox1" />
            <p>{t('ItemDetails:extra', 'Extra Cheese')}</p>
          </div>
          <p className="itemDetails__extras--lineRight">${price}</p>
        </div>
        <div className="itemDetails__extras--line">
          <div className="itemDetails__extras--lineLeft">
            <input className="checkbox" type="checkbox" id="cbox2" />
            <p>{t('ItemDetails:extra', 'Extra Cheese')}</p>
          </div>
          <p className="itemDetails__extras--lineRight">${price}</p>
        </div>
        <div className="itemDetails__extras--line">
          <div className="itemDetails__extras--lineLeft">
            <input className="checkbox" type="checkbox" id="cbox3" />
            <p>{t('ItemDetails:extra', 'Extra Cheese')}</p>
          </div>
          <p className="itemDetails__extras--lineRight">${price}</p>
        </div>
        <div className="itemDetails__extras--line">
          <div className="itemDetails__extras--lineLeft">
            <input className="checkbox" type="checkbox" id="cbox4" />
            <p>{t('ItemDetails:extra', 'Extra Cheese')}</p>
          </div>
          <p className="itemDetails__extras--lineRight">${price}</p>
        </div>
      </div>
      <input
        type="text"
        placeholder="Extra info..."
        id=""
        className="itemDetails__inputText"
      />
      <button className="itemDetails__addOrder">
        {t('ItemDetails:order', 'Add to order')}
      </button>
    </div>
  )
}

export default ItemDetails;
