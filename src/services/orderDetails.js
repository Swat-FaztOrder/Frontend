import fastOrderService from './fastOrderService'

const orderDetailsService = {}

orderDetailsService.getAll = (id = null) => {
  let endpoint = `/order-details`;

  if (id != null) endpoint+=`?orderId=${id}`

  return fastOrderService.get(endpoint)
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

orderDetailsService.preparing = (id) => {
  return fastOrderService.put(`/order-details/preparing/${id}`, { id })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

orderDetailsService.ready = (id) => {
  return fastOrderService.put(`/order-details/ready-to-serve/${id}`, { id })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

orderDetailsService.served = (id) => {
  return fastOrderService.put(`/order-details/served/${id}`, { id })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

export default orderDetailsService
