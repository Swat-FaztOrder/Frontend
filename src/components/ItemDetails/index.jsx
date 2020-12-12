import React from 'react';

/* i18n  */
import { useTranslation } from 'react-i18next';

/* styles */
import './styles.styl';

/* Services */
import orderDetailsService from '../../services/orderDetails'
import orderService from '../../services/order';

const ItemDetails = ({ id, image, title, details, price, order }) => {

  const { t } = useTranslation(['ItemDetails'])

  const handleClick = () => {
    // return orderService.getAll()
    //   .then((data) => data.filter(item => item.tableId === table.id))
    //   .then((order) => {
    //     console.log(order, table.id)
    //     // orderDetailsService.create(order.id, id)
    //   })
    console.log(order, id)
    return orderDetailsService.create(order, id)
  }

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
      <button className="itemDetails__addOrder" onClick={() => handleClick()}>
        {t('ItemDetails:order', 'Add to order')}
      </button>
    </div>
  )
}

export default ItemDetails;
