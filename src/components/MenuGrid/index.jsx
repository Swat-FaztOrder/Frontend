import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context';
import MenuCard from '../MenuCard/index.jsx';
import dishService from '../../services/dish';

/*Constants */
import { USER } from '../../utils/constants/itemsLocalStorage'

import './styles.styl';

const MenuGrid = () => {
  const { updateAction, ActionTypes, updateDish, categorySelected, modalDisplay } = useContext(Context)
  const [dishes, setDishes] = useState([])
  const user = JSON.parse(window.localStorage.getItem(USER))

  const handleAction = (dish) => {
    if (user?.role === 'admin') {
      updateAction(ActionTypes.DISH_UPDATE)
    } else {
      updateAction(ActionTypes.ORDER_ADD)
    }

    updateDish(dish)
  }

  const handleNew = () => {
    updateAction(ActionTypes.DISH_ADD)
    updateDish('')
  }

  useEffect(() => {
    dishService.getAll()
      .then(dishes => setDishes(dishes));
  }, [modalDisplay])

  const dishesList = dishes.filter((el)=> el.categoryId === categorySelected.id).map((dish) =>(
    <MenuCard
      key={dish?.id}
      title={dish?.name}
      price={dish?.price}
      image={dish?.imageUrl}
      onClick={() => handleAction(dish)}
    />
  ))

  return (
    <div className="MenuGrid">
      {
        user.role === 'admin' &&
          <button className="MenuGrid--add" onClick={() => handleNew()}><i className="fas fa-plus"/></button>
      }
      {dishesList}
    </div>
  )
}

export default MenuGrid;
