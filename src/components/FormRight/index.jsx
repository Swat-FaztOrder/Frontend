import React, { useState, useContext } from 'react'

import './styles.styl'

/* Services */
import categoryService from '../../services/category'

/* Context */
import { Context } from '../../Context'

const FormRight = ({ buttonMessage, title }) => {
  const { categorySelected, ActionTypes, actionLayout, updateAction, updateModalDisplay } = useContext(Context)
  const [category, setCategory] = useState(categorySelected.name)

  const handleSubmit = (id, name) => {
    if (actionLayout === ActionTypes.CATEGORY_UPDATE) {
      categoryService.update(id, name)
        .then(() => {
          updateModalDisplay('CATEGORY_UPDATED')
          window.location.replace('#/menu');
        })
    } else {
      categoryService.create(category)
        .then(() => {
          updateModalDisplay('CATEGORY_CREATED')
          window.location.replace('#/menu');
        })
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
