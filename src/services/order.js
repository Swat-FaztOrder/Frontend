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

orderService.finish = (id) => {
  return fastOrderService.put(`/orders/finish/${id}`, { id })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

export default orderService
