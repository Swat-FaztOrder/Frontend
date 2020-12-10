import React, { useContext, useState, useEffect } from 'react'

/* i18n  */
import { useTranslation } from 'react-i18next';

/* Styles */
import './styles.styl'

/* Components */
// import Button from '../Button/index.jsx'

/* Contants */
// import BUTTONS from '../../utils/constants/buttons'
import { TOKEN } from '../../utils/constants/itemsLocalStorage'

import { Context } from '../../Context'
import { Link } from 'react-router-dom';

/* Services */
import categoryService from '../../services/category'

const MenuCategories = () => {
  const { t } = useTranslation(['MenuCategories'])
  const { Logout, updateAction, ActionTypes, updateCategory } = useContext(Context)
  const [categories, setCategories] = useState([])
  const [change, setChange] = useState(false)

  // const handleClick = () => {
  //   // localStorage.removeItem(TOKEN)
  //   Logout();
  //   window.location.reload()
  // }

  const handleAction = (category) => {
    updateAction(ActionTypes.CATEGORY_UPDATE)
    updateCategory(category)
  }

  useEffect(() => {
    categoryService.getAll()
      .then(data => {
        setCategories(data)
      })
  }, [change])

  const categoriesList = categories.sort((a, b) => a.id - b.id).map((category) => {
    return (
      <Link key={category.id} to="/Menu" onClick={() => handleAction(category)}>
        <div className="menuCategories__popular">
          <h1>{category.name}</h1>
        </div>
      </Link>
    )
  })

  return (
    <div className="menuCategories">
      <div>
        <button className="menuCategories--add" onClick={() => updateAction(ActionTypes.CATEGORY_ADD)}><i className="fas fa-plus"/></button>
      </div>
      {categoriesList}

    </div>
  )
}

//<Button onClick={handleClick} type={BUTTONS.CANCEL}>Log out</Button>
export default MenuCategories;
