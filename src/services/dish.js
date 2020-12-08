import fastOrderService from './fastOrderService'

const dishService = {}

dishService.getAll = () => {
  fastOrderService.get('/menu-dishes')
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

dishService.create = ({ name, description, categoryId, price }) => {
  fastOrderService.post('/menu-dishes', { name, description, categoryId, price })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

dishService.get = (dishId) => {
  fastOrderService.get('/menu-dishes', { dishId })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

dishService.update = ({ dishId, name, description, imageUrl, categoryId, price, isActive, isRecomended }) => {
  fastOrderService.put(`/menu-dishes/${dishId}`, { name, description, imageUrl, categoryId, price, isActive, isRecomended })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

export default dishService
