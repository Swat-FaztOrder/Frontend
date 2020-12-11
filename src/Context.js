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
    ORDER_ADD: 'ORDER_ADD',
    BASKET: 'BASKET',
  }

  const [user, setUser] = useState(null)

  const [tables, setTables] = useState(null)
  const [order, setOrder] = useState(null)
  const [selectedTable, setSelectedTable] = useState(null)
  const [dishes, setDishes] = useState(null)
  const [actionLayout, setActionLayout] = useState(ActionTypes.BASE)
  const [categorySelected, setCategorySelected] = useState('')
  const [dishSelected, setDishSelected] = useState('')
  const [modalDisplay, setModalDisplay] = useState('')

  const value = {
    order,
    tables,
    actionLayout,
    categorySelected,
    selectedTable,
    dishSelected,
    modalDisplay,
    Login: (userInfo) => {
      setUser(userInfo)
      window.localStorage.setItem(USER, JSON.stringify(userInfo))
      window.localStorage.setItem(TOKEN, userInfo.accessToken)
    },
    Logout: () => {
      setUser(null)
      window.localStorage.removeItem(TOKEN)
      window.localStorage.removeItem(USER)
      window.location.reload()
    },
    updateAction: (action) => {
      setActionLayout(action)
    },
    updateTable: (table) => {
      setSelectedTable(table)
    },
    updateOrder: (order) => {
      setOrder(order)
    },
    updateCategory: (category) => {
      setCategorySelected(category)
    },
    updateDish: (dish) => {
      setDishSelected(dish)
    },
    updateModalDisplay: (modalName) => {
      setModalDisplay(modalName)
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
