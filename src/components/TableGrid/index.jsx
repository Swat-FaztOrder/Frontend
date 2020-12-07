import React, { useEffect, useState } from 'react';
import TableCard from '../TableCard/index.jsx'

/* Styles */
import './styles.styl';

import tableService from '../../services/table'

// const generateList = (size) => {
//   for (let i = 1; i <= size; i++) {
//     tables.push(i)
//   }
//   return tables
// }

const TableGrid = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    tableService.getAll()
      .then(data => setTables(data))
  }, [])

  const tablesList = tables.map((table) => {
    return <TableCard key={table} title={`Table ${table}`} state="No order" />
  })

  return (
    <div className="TableGrid">
      {tablesList}
    </div>
  )
}

export default TableGrid;
