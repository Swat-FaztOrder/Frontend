import fastOrderService from './fastOrderService'

const orderDetailsService = {}

orderDetailsService.getAll = (id) => {
  return fastOrderService.get(`/order-details?orderId=${id}`)
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

orderDetailsService.create = (orderId, dishId) => {
  return fastOrderService.post('/order-details', { orderId, dishId })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

orderDetailsService.delete = (id) => {
  return fastOrderService.delete(`/order-details/${id}`)
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

orderDetailsService.send = (id) => {
  return fastOrderService.put(`/orders/send-to-kitchen/${id}`, { id })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

export default orderDetailsService
