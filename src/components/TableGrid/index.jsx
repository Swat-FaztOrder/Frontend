import React from 'react';
import TableCard from '../TableCard/index.jsx'

/* Styles */
import './styles.styl';

const generateList = (size) => {
  const tables = []
  for (let i = 1; i <= size; i++) {
    tables.push(i)
  }

  return tables
}

const TableGrid = () => {

  const tablesList = generateList(25).map((table) => {
    return <TableCard key={table} title={`Table ${table}`} state="No order" />
  })

  return (
    <div className="TableGrid">
      {tablesList}
    </div>
  )
}

export default TableGrid;
