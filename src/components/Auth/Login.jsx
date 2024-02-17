import { useEffect, useState } from 'react'
import Button from '../../ui/Buttons/Button'
import {} from './services/AuthService'
import Contact from '../Menu/Contact'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Providers/AuthContext'

function Login() {
  const navigate = useNavigate()
  const { user, loginUser, error } = useAuth()
  console.log('🚀 ~ Login ~ user:', user)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
    e.preventDefault()
    if (!email || !password) return
    loginUser(email, password)
  }

  useEffect(() => {
    if (user) navigate('/')
  }, [user, navigate])

  return (
    <div className='mt-10 flex flex-col justify-between min-h-[70vh]'>
      <form className='space-y-6 px-5' onSubmit={handleLogin}>
        <p className='text-red-500 text-sm'>{error}</p>
        <div className='space-y-5'>
          <label htmlFor='email'>Email</label>
          <input
            required
            type='email'
            id='email'
            className='h-12 border-2 border-gray-300 xs:h-14 text-sm  xs:text-lg px-5 focus:ring-2 font-light xs-font-normal focus:ring-violet-600 outline-none rounded-2xl w-full focus:border-none'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='space-y-5'>
          <label htmlFor='password'>Password</label>
          <input
            required
            type='password'
            id='password'
            className='h-12 border-2 border-gray-300 xs:h-14 text-sm  xs:text-lg px-5 focus:ring-2 font-light xs-font-normal focus:ring-violet-600 outline-none rounded-2xl w-full focus:border-none'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button type='primary' className='px-16 float-right' btnType='submit'>
          Login
        </Button>
      </form>
      <div className='justify-end'>
        <Contact />
      </div>
    </div>
  )
}

export default Login
