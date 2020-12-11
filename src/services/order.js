import fastOrderService from './fastOrderService'

const orderService = {}

orderService.getAll = () => {
  return fastOrderService.get('/orders')
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

orderService.create = () => {
  return fastOrderService.post('/orders')
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

export default orderService
