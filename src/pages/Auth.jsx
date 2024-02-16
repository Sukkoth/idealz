import { useState } from 'react'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'

function Auth() {
  const [tab, setTab] = useState('login')

  return (
    <section>
      <div className='bg-gray-200 rounded-2xl mt-10'>
        <button
          className={`w-1/2 p-2 py-4 rounded-2xl font-normal ${tab === 'login' ? "bg-white" : ""
            }`}
          onClick={() => setTab('login')}
        >Login</button>
        <button
          className={`w-1/2 p-2 py-4 rounded-2xl font-normal ${tab === 'register' ? "bg-white" : ""
            }`}
          onClick={() => setTab('register')}
        >Register</button>
      </div>

      <div>
        {
          tab === 'login' ? <Login /> : <Register />
        }


      </div>
    </section>
  )
}

export default Auth