import fastOrderService from './fastOrderService'

const tableService = {}

tableService.getAll = () => {
  return fastOrderService.get('/tables')
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

tableService.create = (name) => {
  return fastOrderService.post('/tables', { name })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

tableService.get = (id) => {
  return fastOrderService.get(`/tables${id}`)
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

tableService.update = (id, name, isActive) => {
  return fastOrderService.put(`/tables/${id}`, { name, isActive })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

export default tableService
