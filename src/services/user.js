import fastOrderService from './fastOrderService'

const userService = {}

userService.getAll = () => {
  return fastOrderService.get('/users')
    .then(res => res.data)
    .catch(err => console.log('[ERROR] ', err))
}

userService.create = ({ firstname, lastname, email, roleId }) => {
  return fastOrderService.post('users', {
    firstname, lastname, email, roleId: parseInt(roleId)
  })
    .then(res => res.data)
    .catch(err => console.log('[ERROR] ', err))
}

userService.get = (userId) => {
  return fastOrderService.get(`/users${userId}`)
    .then(res => res.data)
    .catch(err => console.log('[ERROR] ', err))
}

userService.update = ({ id, firstname, lastname }) => {
  return fastOrderService.put(`/users/${id}`, {
    firstname, lastname
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
  return fastOrderService.get(`/users/avatar/${fileId}`, {
  })
    .then(res => res.data)
    .catch(err => console.log('[ERROR] ', err))
}

userService.updateAvatar = ({ id, avatar }) => {
  const form = new FormData()
  form.append('avatar', avatar, avatar.name)
  return fastOrderService.post(`/users/avatar/${id}`, form)
    .then(res => res.data)
    .catch(err => console.log('[ERROR] ', err))
}

export default userService
