import React, { useContext } from 'react';

/* i18n  */
import { useTranslation } from 'react-i18next';

/* styles */
import './styles.styl';

/* Services */
import orderDetailsService from '../../services/orderDetails'

/* Context */
import { Context } from '../../Context'

const ItemDetails = ({ id, image, title, details, price, order }) => {

  const { t } = useTranslation(['ItemDetails'])

  const handleClick = () => {
    return orderDetailsService.create(order, id)
            .then(()=> updateModalDisplay('ADDED_TO_ORDER'))
  }

  const { ActionTypes, updateAction, updateModalDisplay } = useContext(Context)

  return (
    <div className="itemDetails">
      <i onClick={() => updateAction(ActionTypes.BASE)} className="fas fa-arrow-circle-left" />
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
      <button className="itemDetails__addOrder" onClick={() => handleClick()}>
        {t('ItemDetails:order', 'Add to order')}
      </button>
    </div>
  )
}

export default ItemDetails;
