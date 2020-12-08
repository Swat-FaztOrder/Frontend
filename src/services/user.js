import fastOrderService from './fastOrderService'

const userService = {}

userService.getAll = () => {
  return fastOrderService.get('/users')
    .then(res => res.data)
    .catch(err => console.log('[ERROR] ', err))
}

userService.create = ({ firstname, lastname, email, roleId }) => {
  return fastOrderService.post('users', {
    firstname, lastname, email, roleId
  })
    .then(res => res.data)
    .catch(err => console.log('[ERROR] ', err))
}

userService.getAll = () => {
  return fastOrderService.post('getUsers', {
  })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

userService.get = (userId) => {
  return fastOrderService.get(`/users${userId}`)
    .then(res => res.data)
    .catch(err => console.log('[ERROR] ', err))
}

userService.update = ({ id, firstname, lastname, avatar }) => {
  return fastOrderService.put(`/users/${id}`, {
    firstname, lastname, avatar
  })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

userService.delete = (id) => {
  return fastOrderService.delete(`/users/${id}`, {
  })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}
userService.getAvatar = (fileId) => {
  return fastOrderService.get(`/users/avater/${fileId}`, {
  })
    .then(res => res.data)
    .catch(err => console.log('[ERROR] ', err))
}

userService.updateAvatar = (userId) => {
  return fastOrderService.post(`/users/avatar/${userId}`)
    .then(res => res.data)
    .catch(err => console.log('[ERROR] ', err))
}

export default userService
