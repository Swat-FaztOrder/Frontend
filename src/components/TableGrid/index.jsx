import React, { useEffect, useState, useContext } from 'react';

/* Constants */
import { USER } from '../../utils/constants/itemsLocalStorage'
import ROUTES from '../../utils/constants/routes'

/* Styles */
import './styles.styl';

/* Components */
import Button from '../Button/index.jsx'
import TableCard from '../TableCard/index.jsx'
import Modal from '../Modal/index.jsx'
import waiter from '../../assets/waiter.png'

/* Context */
import { Context } from '../../Context'

/* Services */
import tableService from '../../services/table'
import orderService from '../../services/order'

const TableGrid = () => {
  const { updateTable, updateOrder, updateCategory, categories } = useContext(Context)
  const [tables, setTables] = useState([])
  const [change, setChange] = useState(false)
  const user = JSON.parse(window.localStorage.getItem(USER))
  const [showModal, setShowModal] = useState(false)
  const [selectedTable, setSelectedTable] = useState(null)

  const checkTableAvailability = () => {
    const table = tables.filter(item => !item.isActive).shift()
    if (table) {
      return tableService.update(table.id, table.name, true)
        .then(() => setChange(!change))
    }
    return tableService.create(`table ${tables.length + 1}`)
      .then(() => setChange(!change))
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
    updateCategory('')
  }, [change])

  const handleModal = (id) => {
    setSelectedTable(id)
    setShowModal(true)
  }

  const handleTableClick = () => {
    updateTable(selectedTable)
    orderService.getAll()
      .then((data) => data.find(item => item.tableId === selectedTable))
      .then((order) => {
        if (!order) {
          orderService.create(selectedTable)
            .then(data => {
              updateOrder(data.id)
            })
        } else {
          updateOrder(order.id)
        }
      })

    updateCategory(categories[0])

  }

  const tablesList = tables.map((table) => {
    if (table?.isActive) {
      return (
        <TableCard key={table.id} title={`${table.name}`} state={table.isAvailable ? 'No order' : 'In Progress'} onClick={() => handleModal(table.id)} />
      )
    }
    return null
  })

  return (
    <>
      <div className="TableGrid">
        {tablesList}
        {user?.role === 'admin' &&
        <>
          <Button onClick={() => handleClick('ADD')} type="Add table"><i className="fas fa-plus"/></Button>
          <Button onClick={() => handleClick('DELETE')} type="Del table"><i className="fas fa-times"/></Button>
        </>
        }
      </div>
      {showModal &&
        <Modal
          image={waiter}
          subtitleA="You have selected the table"
          subtitleB={selectedTable}
          last="Keep that smile:)"
          buttons="true"
          buttonA="Continue"
          handleClickB={handleTableClick}
          hideModal={() => setShowModal(false)}
          to={user?.role === 'waitress' && ROUTES.MENU}
        />}
    </>
  )
}

export default TableGrid;
