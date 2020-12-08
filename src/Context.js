import React, { createContext, useState } from 'react'

import { TOKEN } from './utils/constants/itemsLocalStorage'

export const Context = createContext()

const Provider = ({ children }) => {

  const [user, setUser] = useState(null)

  const [tables, setTables] = useState(null)
  const [dishes, setDishes] = useState(null)

  const value = {
    user,
    tables,
    Login: (userInfo) => {
      window.localStorage.setItem(TOKEN, userInfo.accessToken)
      setUser(userInfo)
    },
    Logout: () => {
      setUser(null)
      window.localStorage.removeItem(TOKEN)
    }
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
