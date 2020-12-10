import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context';
import MenuCard from '../MenuCard/index.jsx';
import dishService from '../../services/dish';
import './styles.styl';

const MenuGrid = () => {
  const { updateAction, ActionTypes, updateDish, categorySelected } = useContext(Context)
  const [dishes, setDishes] = useState([])

  const handleAction = (dish) => {
    updateAction(ActionTypes.DISH_UPDATE)
    updateDish(dish)
  }

  const handleNew = () => {
    updateAction(ActionTypes.DISH_ADD)
    updateDish('')
  }

  useEffect( () => {
    dishService.getAll()
    .then(dishes => setDishes(dishes));
  }, [])


  const dishesList = dishes.filter((el)=> el.categoryId == categorySelected.id ).map((dish) =>
    <MenuCard key={dish.id} title={dish.name} price={dish.price} image={dish.imageUrl}
      onClick={() => handleAction(dish)} />)

  return (
    <div className="MenuGrid">
      <button className="MenuGrid--add" onClick={() => handleNew() }><i className="fas fa-plus"/></button>
      {dishesList}
    </div>
  )
}

export default MenuGrid;
