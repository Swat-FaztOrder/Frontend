import React from 'react'

import './styles.styl'

const FormRight = ({ buttonMessage, title }) => {
  return (
    <div className="formRight">
      <form action="" method="post" className="formRight__container">
        <h1 className="formRight__container--title">
          {title}
        </h1>
        <input type="text" className="formRight__container--input" />
        <input type="submit" value={buttonMessage} className="formRight__container--submit" />
      </form>
    </div>
  )
}

export default FormRight
