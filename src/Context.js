import React, { createContext, useState } from 'react'

import { TOKEN } from './utils/constants/itemsLocalStorage'

export const Context = createContext()

const Provider = ({ children }) => {

  const ActionTypes = [
    'BASE',
    'CATEGORY_ADD',
    'CATEGORY_UPDATE',
    'PROFILE_ADD',
    'PROFILE_UPDATE',
    'DISH_ADD',
    'DISH_UPDATE',
  ]

  const [user, setUser] = useState(null)

  const [tables, setTables] = useState(null)
  const [dishes, setDishes] = useState(null)
  const [layoutAction, setLayoutAction] = useState(ActionTypes.BASE)

  const value = {
    user,
    tables,
    layoutAction,
    Login: (userInfo) => {
      window.localStorage.setItem(TOKEN, userInfo.accessToken)
      setUser(userInfo)
    },
    Logout: () => {
      setUser(null)
      window.localStorage.removeItem(TOKEN)
    },
    updateAction: (action) => {
      setLayoutAction(action)
    },
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
