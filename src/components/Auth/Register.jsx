import { useEffect, useState } from 'react'
import Button from '../../ui/Buttons/Button';
import { useAuth } from '../../Providers/AuthContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { user, error, registerUser } = useAuth()
  const navigate = useNavigate()
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: 'male'
  })

  function handleRegister(e) {
    e.preventDefault();
    if (!data) return;
    registerUser(data)
  }


  useEffect(() => {
    if (user) navigate('/')
  }, [user, navigate])

  return (
    <div className='mt-10 grid'>
      <h1 className='text-rowdies text-2xl'> Register Now and get <span className='text-light-red'>discount</span> for your first purchase</h1>
      <form className='space-y-3 px-5 mt-10' onSubmit={handleRegister}>
        <p className='text-red-500 text-sm'>{error}</p>
        <div className='space-y-2'>
          <label htmlFor="firstName">First Name</label>
          <input required type="text" id='firstName' className='h-16 text-lg px-5 focus:ring-2 font-normal focus:ring-violet-600 outline-none rounded-2xl w-full' value={data?.firstName} onChange={(e) => setData(prev => { return { ...prev, firstName: e.target.value } })} />
        </div>

        <div className='space-y-2'>
          <label htmlFor="lastName">Last Name</label>
          <input required type="text" id='lastName' className='h-16 text-lg px-5 focus:ring-2 font-normal focus:ring-violet-600 outline-none rounded-2xl w-full' value={data?.lastName} onChange={(e) => setData(prev => { return { ...prev, lastName: e.target.value } })} />
        </div>


        <div className='font-light flex  items-center h-16 bg-white border-gray-300 rounded-2xl py-5'>
          <div className='flex items-center justify-center gap-4 border-r border-r-black w-1/2' onClick={() => setData(prev => { return { ...prev, gender: 'male' } })}>
            <div className={`cursor-pointer size-10 ${data?.gender === 'male' ? 'bg-gray-600' : ''} rounded-full border border-gray-800`}></div>Male
          </div>
          <div className='flex items-center justify-center gap-4 w-1/2' onClick={() => setData(prev => { return { ...prev, gender: 'female' } })}>
            <div className={`cursor-pointer size-10 ${data?.gender === 'female' ? 'bg-gray-600' : ''} rounded-full border border-gray-800`}></div>Female
          </div>
        </div>


        <div className='space-y-2'>
          <label htmlFor="email">Email</label>
          <input required type="email" id='email' className='h-16 text-lg px-5 focus:ring-2 font-normal focus:ring-violet-600 outline-none rounded-2xl w-full' value={data?.email} onChange={(e) => setData(prev => { return { ...prev, email: e.target.value } })} />

        </div>
        <div className='space-y-2'>
          <label htmlFor="password">Password</label>
          <input required type="password" id='password' className='h-16 text-lg px-5 focus:ring-2 font-normal focus:ring-violet-600 outline-none rounded-2xl w-full' value={data?.password} onChange={(e) => setData(prev => { return { ...prev, password: e.target.value } })} />
        </div>
        <Button type='primary' className='px-16 float-right' btnType='submit'>
          Register
        </Button>
      </form>
    </div>
  )
}

export default Register