import React, { createContext, useState } from 'react'

import { TOKEN, USER } from './utils/constants/itemsLocalStorage'

export const Context = createContext()

const Provider = ({ children }) => {

  const ActionTypes = {
    BASE: 'BASE',
    CATEGORY_ADD: 'CATEGORY_ADD',
    CATEGORY_UPDATE: 'CATEGORY_UPDATE',
    PROFILE_ADD: 'PROFILE_ADD',
    PROFILE_UPDATE: 'PROFILE_UPDATE',
    DISH_ADD: 'DISH_ADD',
    DISH_UPDATE: 'DISH_UPDATE',
    BASKET: 'BASKET',
  }

  const [user, setUser] = useState(null)

  const [tables, setTables] = useState(null)
  const [actionLayout, setActionLayout] = useState(ActionTypes.BASE)
  const [categorySelected, setCategorySelected] = useState('')
  const [dishSelected, setDishSelected] = useState('')

  const value = {

    tables,
    actionLayout,
    categorySelected,
    dishSelected,
    Login: (userInfo) => {
      setUser(userInfo)
      window.localStorage.setItem(USER, JSON.stringify(userInfo))
      window.localStorage.setItem(TOKEN, userInfo.accessToken)
    },
    Logout: () => {
      setUser(null)
      window.localStorage.removeItem(TOKEN)
    },
    updateAction: (action) => {
      setActionLayout(action)
    },
    updateCategory: (category) => {
      setCategorySelected(category)
    },
    updateDish: (dish) => {
      setDishSelected(dish)
    },
    user,
    ActionTypes: ActionTypes
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
