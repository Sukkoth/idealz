import { Storage } from '../../../utils/Storage'

export const loginUser = (email, password) => {
  const users = Storage.get('users')
  if (!users?.length > 0) {
    return null
  }
  const foundUser = users.find(
    user => user.email === email && user.password === password,
  )
  if (foundUser) {
    Storage.set('auth', foundUser)
    return foundUser
  } else return null
}
export const registerUser = userData => {
  console.log('🚀 ~ registerUser ~ userData:', userData)
  const users = Storage.get('users') || []
  const id = 'user' + new Date().toISOString()
  const user = { ...userData, id }
  users.push(user)
  console.log('🚀 ~ registerUser ~ users:', users)
  Storage.set('users', users)
  return user
}
