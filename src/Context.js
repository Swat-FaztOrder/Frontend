import React, { createContext, useState } from 'react'

import { TOKEN } from './utils/constants/itemsLocalStorage'

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
  const [dishes, setDishes] = useState(null)
  const [actionLayout, setActionLayout] = useState(ActionTypes.BASE)

  const value = {

    tables,
    actionLayout,
    Login: (userInfo) => {
      window.localStorage.setItem(TOKEN, userInfo.accessToken)
      setUser(userInfo)
    },
    Logout: () => {
      setUser(null)
      window.localStorage.removeItem(TOKEN)
    },
    updateAction: (action) => {
      setActionLayout(action)
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
