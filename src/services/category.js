import fastOrderService from './fastOrderService'

const categoryService = {}

categoryService.getAll = () => {
  fastOrderService.get('/menu-categories')
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

categoryService.create = (name) => {
  fastOrderService.post('/menu-categories', { name })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

categoryService.get = (id) => {
  fastOrderService.get('/menu-categories', { id })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

categoryService.update = ({ id, name }) => {
  fastOrderService.put(`/menu-dishes/${dishId}`, { name })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

export default categoryService
