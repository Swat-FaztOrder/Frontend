import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context'
import dishService from '../../services/dish'
import categoryService from '../../services/category'
import './styles.styl';

const AddItem = () => {
  const { dishSelected, actionLayout, ActionTypes, updateAction, categorySelected } = useContext(Context)
  const [dish, setDish] = useState(dishSelected)
  const [categories, setCategories] = useState([])

  const handleSubmit = () => {
    if (actionLayout === ActionTypes.DISH_ADD) {
      dish.price = Number(dish.price);
      dish.categoryId = Number(categorySelected.id);
      dishService.create(dish)
        .then(() => location.reload())
    } else {
      dish.dishId = dish.id;
      dishService.update(dish)
        .then((res) => location.reload())
    }
  }

  const handleChange = (e) => {
    const newDish = {
      ...dish,
      [e.target.id]: e.target.value
    }
    setDish(newDish)
  }

  useEffect(()=> {
    categoryService.getAll()
      .then(data => {
        setCategories(data)
      })
    setDish(dishSelected)
  }, [dishSelected])

  const categoryOptions = categories.map(category => <option value={category.id} key={category.id}  selected={ dish.categoryId==category.id }  >{category.name}</option>)

  return (
    <div className="addItem">
      <form key={dish.id} action="" className="addItem__form" onSubmit={()=> handleSubmit()}>
        <i onClick={() => updateAction(ActionTypes.BASE)} className="fas fa-arrow-circle-left arrow" />
        {dish.imageUrl &&
          <div className="addItem__form--image">
            <img src={dish.imageUrl} alt=""/>
          </div>
        }
        <div className="addItem__form--group">
          <label htmlFor="name">Add title</label>
          <input type="text" id="name" defaultValue={dish.name} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="addItem__form--group">
          <label htmlFor="description">Add details</label>
          <textarea type="text" id="description" onChange={(e)=>handleChange(e)} defaultValue={dish.description} />
        </div>
        <div className="addItem__form--group">
          <label htmlFor="price">Add price</label>
          <input type="text" id="price" defaultValue={dish.price} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="addItem__form--group">
          <label htmlFor="imageUrl">Image URL</label>
          <input type="text" id="imageUrl" defaultValue={dish.imageUrl} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="addItem__form--group">
          <label htmlFor="categoryId">Categoría</label>
          <select type="text" id="categoryId" disabled>
            <option value={categorySelected.id} selected>{categorySelected.name}</option>
          </select>
        </div>
        <input type="submit" value="Send" className="addItem__form--submit" />
        <div className="empty">this is and empty div</div>
      </form>
    </div>
  )
}

export default AddItem
