import React, { useEffect, useState } from 'react';
import TableCard from '../TableCard/index.jsx'

/* Constants */
import { USER } from '../../utils/constants/itemsLocalStorage'

/* Styles */
import './styles.styl';

/* Components */
import Button from '../Button/index.jsx'

import tableService from '../../services/table'

// const generateList = (size) => {
//   for (let i = 1; i <= size; i++) {
//     tables.push(i)
//   }
//   return tables
// }

const TableGrid = () => {
  const [tables, setTables] = useState([]);
  const [change, setChange] = useState(false)
  const [role, setRole] = useState(JSON.parse(window.localStorage.getItem(USER)).role)

  const checkTableAvailability = () => {
    const table = tables.filter(item => !item.isActive).shift()
    if (table) {
      tableService.update(table.id, table.name, true)
        .then(() => setChange(!change))
    } else {
      return tableService.create(`table ${tables.length + 1}`)
        .then(() => setChange(!change))
    }
  }

  const handleClick = (action) => {
    if (action === 'ADD') {
      checkTableAvailability()
    } else {
      const table = tables.filter((item) => item.isActive).pop()
      tableService.update(table.id, table.name, false)
        .then(() => setChange(!change))
    }

  }

  useEffect(() => {
    tableService.getAll()
      .then(data => {
        setTables(data.sort((a, b) => (a.id - b.id)))
      })
  }, [change])

  const tablesList = tables.map((table) => {
    if (table?.isActive) {
      return (
        <TableCard key={table.id} title={`${table.name}`} state="No order" />
      )
    }
  })

  return (
    <>
      <div className="TableGrid">
        {tablesList}
        {role === 'admin' &&
        <>
          <Button onClick={() => handleClick('ADD')} type="Add table"><i className="fas fa-plus"/></Button>
          <Button onClick={() => handleClick('DELETE')} type="Del table"><i className="fas fa-times"/></Button>
        </>
        }

      </div>
    </>
  )
}

export default TableGrid;
