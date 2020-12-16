import React, { useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Context } from '../../Context'
import { Link } from 'react-router-dom';
import categoryService from '../../services/category'
import { USER } from '../../utils/constants/itemsLocalStorage'
import ROUTES from '../../utils/constants/routes'
import './styles.styl'

const MenuCategories = () => {
  const { t } = useTranslation(['MenuCategories'])
  const { categorySelected, updateAction, ActionTypes, updateCategory, selectedTable, updateCategories, categories } = useContext(Context)
  const user = JSON.parse(window.localStorage.getItem(USER))
  const [change, setChange] = useState(false)

  const handleAction = (category) => {
    if (user?.role === 'admin') {
      updateAction(ActionTypes.CATEGORY_UPDATE)
    } else {
      updateAction(ActionTypes.BASE)
    }

    updateCategory(category)

  }

  useEffect(() => {
    categoryService.getAll()
      .then(data => {
        updateCategories(data)
      })
  }, [change])

  const categoriesList = categories.sort((a, b) => a.id - b.id).map((category) => {

    return (
      <Link key={category.id} to={selectedTable || user?.role === 'admin' ? ROUTES.MENU : ROUTES.TABLES} onClick={() => handleAction(category)}>
        <div className={category.id === categorySelected.id ? 'menuCategories__popular active' : 'menuCategories__popular'}>
          <h1>{category.name}</h1>
        </div>
      </Link>
    )
  })

  return (
    <div className="menuCategories">
      <h1 className="menuCategories--title">Menu</h1>
      {
        user?.role === 'admin' &&
        <div>
          <button className="menuCategories--add" onClick={() => {

            updateAction(ActionTypes.CATEGORY_ADD)
            updateCategory('')
          }}
          ><i className="fas fa-plus"/></button>
        </div>
      }
      {categoriesList}
    </div>
  )
}

export default MenuCategories;
