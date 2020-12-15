import React, { useContext } from 'react'
import { Context } from '../../Context'
// import dishService from '../../services/dish'
// import KitchenModal from '../../components/KitchenModal/index.jsx'
import './styles.styl'

/* i18n */
import { useTranslation } from 'react-i18next';

const KitchenOrderCard = ({ tableNum, items, stat }) => {
  const { t } = useTranslation(['KitchenOrderCard'])

  const { updateDishForUpdateStatus } = useContext(Context);

  const handleChange = (item) => {
    updateDishForUpdateStatus(item)
  }

  const handleTitle = (item) => {
    return item.status === 'preparing' ? <strike className="text-muted">{item.title}</strike> : item.title
  }

  const handleStatus = (item) => {
    return item.status === 'preparing' ? 'https://www.flaticon.com/svg/static/icons/svg/3753/3753091.svg' : 'https://www.flaticon.com/svg/static/icons/svg/3445/3445534.svg';
  }

  return (
    <div className="orderCard">
      <div className={`orderCard__table ${stat}`}>
        <h1>{t('KitchenOrderCard:Table', 'Table')} {tableNum}</h1>
      </div>
      <div className="orderCard__list">
        {items.map((item) => (
          <div className="orderCard__list--item" key={item.id} onClick={() => handleChange(item)}>
            <h3 className="orderCard__list--itemTitle">
              { handleTitle(item) }
            </h3>
            <figure className="orderCard__list--itemStatus">
              <img src={handleStatus(item)} alt="" width="20" height="20"/>
            </figure>
          </div>
        ))}
      </div>
      {/* Commented to future implementation */}
      {/* <a className="orderCard__icon">
        <i className="fas fa-sticky-note" />
      </a> */}
    </div>
  )
}

export default KitchenOrderCard
