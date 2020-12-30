import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context'
import dishService from '../../services/dish'
import categoryService from '../../services/category'
import './styles.styl';

const AddItem = () => {
  const { dishSelected, actionLayout, ActionTypes, updateAction, updateModalDisplay, categorySelected } = useContext(Context)
  const [dish, setDish] = useState(dishSelected)
  const [categories, setCategories] = useState([])

  useEffect(()=> {
    categoryService.getAll()
      .then(data => {
        setCategories(data)
      })
    setDish(dishSelected)
  }, [dishSelected])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (actionLayout === ActionTypes.DISH_ADD) {
      createDish();
    } else {
      updateDish();
    }
  }

  const createDish = () => {
    dish.price = Number(dish.price);
    dish.categoryId = Number(categorySelected.id);
    dishService.create(dish)
      .then((res) => dishService.updateImage({dishId: res.id, image: dish.image}))
      .then(()=> updateModalDisplay('ADD_DISH'));
  }

  const updateDish = () => {
    dish.dishId = dish.id;
    dishService.update(dish)
      .then((res) =>  {
        //if  user add new image then update image if not only return updated dish
        if (dish.image) {
          return dishService.updateImage({dishId: res.id, image: dish.image});
        } else {
          return res;
        }
      })
      .then(()=> updateModalDisplay('UPDATED_DISH'))
  }
  /**
   * Update input value in state
   * @param {Event} e form event
   */
  const handleChange = (e) => {
    const newDish = {
      ...dish,
      [e.target.id]: e.target.value
    }
    setDish(newDish)
  }

  /**
   * Handle the value of input file to show image when select and prepare form to submit
   * @param {Event} e input file event
   */
  const handleImage = (e) => {
    let file = e.target.files[0];
    const customEvent = {
      target: {
        id: 'image',
        value: file
      }
    }
    handleChange(customEvent);
  }

  /**
   * Choose what image should be displayed the default or new image
   */
  const handleDisplayImage = () => {
    if (dish.imageUrl && !dish.image) {
      return <img src={dish.imageUrl} alt=""/>;
    } else if (dish.imageUrl){
      return <img src={URL.createObjectURL(dish.image)} alt=""/>;
    }
  }

  return (
    <div className="addItem">
      <form key={dish.id} action="" className="addItem__form" onSubmit={(e)=> handleSubmit(e)}>
        <i onClick={() => updateAction(ActionTypes.BASE)} className="fas fa-arrow-circle-left arrow" />
          <div className="addItem__form--image">
            { handleDisplayImage() }
          </div>
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
          <label htmlFor="imageUrl">Image</label>
          <input type="file" id="imageUrl" onChange={(e)=>handleImage(e)} />
        </div>
        <div className="addItem__form--group">
          <label htmlFor="categoryId">Categoría</label>
          <select type="text" id="categoryId" disabled defaultValue={categorySelected.id}>
            <option value={categorySelected.id}>{categorySelected.name}</option>
          </select>
        </div>
        <input type="submit" value="Send" className="addItem__form--submit" />
        <div className="empty">this is and empty div</div>
      </form>
    </div>
  )
}

export default AddItem
