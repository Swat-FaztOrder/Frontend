import React, { useState, useContext } from 'react'

import './styles.styl'

/* Services */
import categoryService from '../../services/category'

/* Context */
import { Context } from '../../Context'

const FormRight = ({ buttonMessage, title }) => {
  const { categorySelected, ActionTypes, actionLayout, updateAction } = useContext(Context)
  const [category, setCategory] = useState(categorySelected.name)

  const handleSubmit = (id, name) => {
    if (actionLayout === ActionTypes.CATEGORY_UPDATE) {
      categoryService.update(id, name)
        .then(() => location.reload())
    } else {
      categoryService.create(category)
        .then(() => location.reload())
    }
  }

  return (
    <div className="formRight" >
      <i onClick={() => updateAction(ActionTypes.BASE)} className="fas fa-arrow-circle-left" />
      <form key={categorySelected.name} onSubmit={() => handleSubmit(categorySelected.id, category)} className="formRight__container">
        <h1 className="formRight__container--title">
          {title}
        </h1>
        <input defaultValue={categorySelected.name} onChange={({ target }) => setCategory(target.value)} type="text" className="formRight__container--input" />
        <input type="submit" value={buttonMessage} className="formRight__container--submit" />
      </form>
    </div>
  )
}

export default FormRight
