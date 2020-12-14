import fastOrderService from './fastOrderService'

const dishService = {}

dishService.getAll = () => {
  return fastOrderService.get('/menu-dishes')
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

dishService.create = ({ name, description, categoryId, price, imageUrl }) => {
  return fastOrderService.post('/menu-dishes', { name, description, categoryId, price, imageUrl })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

dishService.get = (dishId) => {
  return fastOrderService.get('/menu-dishes', { dishId })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

dishService.update = ({ dishId, name, description, imageUrl, categoryId, price, isActive, isRecomended }) => {
  return fastOrderService.put(`/menu-dishes/${dishId}`, { name, description, imageUrl, categoryId, price, isActive, isRecomended })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

dishService.preparing = ({ dishId }) => {
  return fastOrderService.put(`/order-details/preparing/${dishId}`)
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

dishService.readyToServe = ({ dishId }) => {
  return fastOrderService.put(`/order-details/ready-to-serve/${dishId}`)
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

export default dishService
