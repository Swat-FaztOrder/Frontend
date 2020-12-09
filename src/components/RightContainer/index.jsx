import React, { useContext } from 'react'

import waiter from '../../assets/waiter.png'

/* Context */
import { Context } from '../../Context'
import OrderDetails from '../OrderDetails/index.jsx'

import './styles.styl'

const RightContainer = () => {
  const { actionLayout, setActionLayout, ActionTypes } = useContext(Context)

  return (
    <div className="orderDetails">
      {actionLayout === ActionTypes.BASE &&
        <OrderDetails
          image={waiter}
          Button="false"
          subtitle1="Admin"
          title1="Diego Valdez"
          subtitle2="Restaurant"
          title2="Platzi Master"
        />
      }
      {actionLayout === ActionTypes.PROFILE_ADD &&
        <OrderDetails
          image={waiter}
          Button="false"
          subtitle1="Admin"
          title1="Diego Valdez"
          subtitle2="Restaurant"
          title2="Platzi Master"
        />
      }
      {actionLayout === ActionTypes.PROFILE_UPDATE &&
        <OrderDetails
          image={waiter}
          Button="false"
          subtitle1="Admin"
          title1="Diego Valdez"
          subtitle2="Restaurant"
          title2="Platzi Master"
        />
      }
    </div>
  )
}

export default RightContainer
