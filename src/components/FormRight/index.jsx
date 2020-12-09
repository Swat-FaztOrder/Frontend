import React, { useState } from 'react'

import './styles.styl'

/* Services */
import categoryService from '../../services/category'

const FormRight = ({ buttonMessage, title }) => {
  const [category, setCategory] = useState('')

  const handleSubmit = () => {
    categoryService.create(category).then(location.reload())
  }

  return (
    <div className="formRight">
      <form onSubmit={handleSubmit} className="formRight__container">
        <h1 className="formRight__container--title">
          {title}
        </h1>
        <input onChange={({ target }) => setCategory(target.value)} type="text" className="formRight__container--input" />
        <input type="submit" value={buttonMessage} className="formRight__container--submit" />
      </form>
    </div>
  )
}

export default FormRight
