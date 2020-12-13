import fastOrderService from './fastOrderService'

const orderService = {}

orderService.getAll = () => {
  return fastOrderService.get('/orders')
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

orderService.create = (tableId, totalDiners = 1) => {
  return fastOrderService.post('/orders', { tableId, totalDiners })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}
// {
//   "id": 3,
//   "waitressId": 1,
//   "tableId": 3,
//   "totalDiners": 1,
//   "totalDishes": 0,
//   "totalPrice": 0,
//   "status": "ordering",
//   "createdAt": "2020-12-11T04:01:09.049Z",
//   "updatedAt": "2020-12-11T04:01:09.049Z"
// }

orderService.get = (id) => {
  return fastOrderService.get(`/orders/${id}`)
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

orderService.delete = (id) => {
  return fastOrderService.delete(`/orders/${id}`)
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

orderService.send = (id) => {
  return fastOrderService.put(`/orders/send-to-kitchen/${id}`, { id })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

export default orderService
