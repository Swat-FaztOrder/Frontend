import fastOrderService from './fastOrderService'

const rolService = {}

rolService.getAll = () => {
  return fastOrderService.get('/roles')
    .then(res => res.data)
    .catch(err => console.log(err))
}

export default rolService
