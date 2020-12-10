import fastOrderService from './fastOrderService'

const categoryService = {}

categoryService.getAll = () => {
  return fastOrderService.get('/menu-categories')
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

categoryService.create = (name) => {
  return fastOrderService.post('/menu-categories', { name })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

categoryService.get = (id) => {
  return astOrderService.get('/menu-categories', { id })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

categoryService.update = (id, name) => {
  console.log(id, name)
  return fastOrderService.put(`/menu-categories/${id}`, { name })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

export default categoryService
