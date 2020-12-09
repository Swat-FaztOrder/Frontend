import React, { useEffect, useState } from 'react';
import TableCard from '../TableCard/index.jsx'

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
    console.log('Entro')
    if (action === 'ADD') {
      checkTableAvailability()
      console.log('ADD')
    } else {
      const table = tables.filter((item) => item.isActive).pop()
      // setTables(tables.map((item) => {
      //   return item !== table
      // }))
      // console.log(table)
      tableService.update(table.id, table.name, false)
        .then(() => setChange(!change))
      console.log('DELETE')
    }

  }

  // useEffect(() => {
  //   tableService.getAll()
  //     .then(data => setTables(data.filter((item) => item.isActive)))
  // }, [change])

  useEffect(() => {
    tableService.getAll()
      .then(data => {
        console.log(data)
        setTables(data.sort((a, b) => (a.id - b.id)))
      })
      // .then(() => {
      //   setTables(tablesDB.filter((item) => item.isActive))
      //   console.log(tablesDB)
      // })
      // .then(() => console.log(tablesDB))
  }, [change])

  const tablesList = tables.map((table) => {
    if (table?.isActive) {
      console.log(table.id, table.name)
      return (
        <TableCard key={table.id} title={`${table.name}`} state="No order" />
      )
    }
  })

  return (
    <>
      <div className="TableGrid">
        {tablesList}
        <Button onClick={() => handleClick('ADD')} type="Add table"><i className="fas fa-plus"/></Button>
        <Button onClick={() => handleClick('DELETE')} type="Del table"><i className="fas fa-times"/></Button>
      </div>
    </>
  )
}

export default TableGrid;
