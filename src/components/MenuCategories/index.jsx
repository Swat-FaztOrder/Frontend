import React, { useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Context } from '../../Context'
import { Link } from 'react-router-dom';
import categoryService from '../../services/category'
import { USER } from '../../utils/constants/itemsLocalStorage'
import './styles.styl'

const MenuCategories = () => {
  const { t } = useTranslation(['MenuCategories'])
  const { updateAction, ActionTypes, updateCategory } = useContext(Context)
  const [categories, setCategories] = useState([])
  const [change, setChange] = useState(false)

  const [role, setRole] = useState('')

  const handleAction = (category) => {
    updateAction(ActionTypes.CATEGORY_UPDATE)
    updateCategory(category)
  }

  useEffect(() => {
    categoryService.getAll()
      .then(data => {
        setCategories(data)
      })
    if(window.localStorage.getItem(USER) != null) {
      setRole(JSON.parse(window.localStorage.getItem(USER)).role)
    }
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
      {
        role == 'admin' &&
        <div>
          <button className="menuCategories--add" onClick={() => updateAction(ActionTypes.CATEGORY_ADD)}><i className="fas fa-plus"/></button>
        </div>
      }
      {categoriesList}

    </div>
  )
}

export default MenuCategories;
