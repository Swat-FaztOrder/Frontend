import fastOrderService from './fastOrderService'

const authService = {}

authService.login = (email, password) => {
  return fastOrderService.post('/auth/signin', {
    email, password
  })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

authService.changePassword = ({ email, oldPassword, newPassword }) => {
  return fastOrderService.put('/auth/sing-change', {
    email,
    old: oldPassword,
    new: newPassword
  })
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

authService.logout = () => {
  return fastOrderService.post('/auth/signout')
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

export default authService
