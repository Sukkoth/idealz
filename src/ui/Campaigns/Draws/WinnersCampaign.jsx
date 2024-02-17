import { IoTrashBin } from 'react-icons/io5'
import carImg from '../../../assets/images/car2.png'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useAuth } from '../../../Providers/AuthContext'
import { Storage } from '../../../utils/Storage'

function WinnersCampaign({ type, topSticker = false, winner, reload }) {
  const { user } = useAuth()

  const removeFromCart = productId => {
    console.log('🚀 ~ removeFromCart ~ productId:', productId)
    let carts = Storage.get('carts') //get all the carts
    let userCart = carts.find(userCart => {
      return userCart.userId === user?.id
    })
    console.log('🚀 ~ removeFromCart ~ userCart:', userCart)

    userCart = {
      ...userCart,
      items: userCart?.items?.filter(cart => cart.productId !== productId),
    }

    console.log('🚀 ~ removeFromCart ~ userCart:', userCart)

    if (carts?.length) {
      carts = carts.map(cart => (cart?.userId === user?.id ? userCart : cart))
    } else {
      carts.push(userCart)
    }
    //write to storage

    Storage.set('carts', carts)
    reload(prev => !prev)
    // reload(prev => !prev)
  }
  return (
    <div className='rounded-3xl bg-white p-2 overflow-hidden'>
      <div className='relative rounded-[2.2rem] p-2 ' id='image-with-tag'>
        <div className='relative rounded-3xl overflow-hidden z-20'>
          <img
            src={`/asset/images/${type === 'winners' ? 'winners' : 'products'}/${winner?.image}`}
            alt='img'
          />
          {topSticker && (
            <div className='absolute bg-white rounded-es-3xl rounded-ee-3xl w-[7rem] h-[4rem] p-5 z-30 right-10 top-0  flex items-center justify-center'>
              <p className='text-rowdies text-2xl'>deem</p>
            </div>
          )}
        </div>
      </div>
      {type === 'winners' && (
        <div className='p-2' id='details'>
          <div className='flex gap-2 p-2'>
            <div className='w-[80%]'>
              <h2 className='text-4xl text-light-red sm:text-xl sm:w-[60%] md:w-[75%] mb-2 text-rowdies leading-5'>
                Congratulations
              </h2>
              <p className='text-lg font-light'>
                <span className='font-bold'>{winner?.winner}</span> on winning
              </p>
              <p className='text-lg font-semibold'>{winner?.productName}</p>
              <p className='font-light'>Tocket no. {winner?.ticketNumber}</p>
            </div>
          </div>
          <div className='text-xs font-thin text-stone-400 mt-3'>
            <p>Announced on: </p>
            <p>{formatDate(winner.drawDate)}</p>
          </div>
        </div>
      )}
      {type === 'upcoming' && (
        <div className='p-2' id='details'>
          <div className='flex gap-2 p-2'>
            <div className='text-xl'>
              <p className=' font-semibold'>Campaign: {winner?.productName}</p>
              {/* <p className='font-normal'>CG-03404</p> */}
              <p className='font-semibold text-light-red'>
                Draw Date: {winner?.drawDate}
              </p>
            </div>
          </div>
          <div className='text-xs font-thin text-stone-400 mt-3'>
            {/* <p>You are not participant</p> */}
            {/* <p>You missed this campaign</p> */}
          </div>
        </div>
      )}

      {type === 'cart' && (
        <div className='p-2' id='details'>
          <div className='flex gap-2 p-2'>
            <div className='text-sm'>
              <p className=' font-semibold'>Campaign: {winner?.productName}</p>
              {/* <p className='font-normal'>CG-03404</p> */}
              <p className='font-semibold text-light-red text-xs sm:text-sm text-wrap'>
                Draw Date: {winner?.drawDate}
              </p>
            </div>
          </div>
          <div className='text-xs font-thin text-stone-400 mt-1'>
            <p className='text-lg tracking-widest text-black font-bold flex items-center justify-between'>
              <span>Tickets</span>
              <IoTrashBin
                color='red'
                className='cursor-pointer'
                onClick={() => removeFromCart(winner?.productId)}
              />
            </p>
            {winner?.tickets?.map(ticket => (
              <p key={ticket}>{ticket}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

WinnersCampaign.propTypes = {
  type: PropTypes.oneOf(['upcoming', 'winners', '', 'cart']).isRequired,
  topSticker: PropTypes.bool,
  winner: PropTypes.object.isRequired,
  reload: PropTypes.func,
}

function formatDate(inputDateString) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  const date = new Date(inputDateString)
  return new Intl.DateTimeFormat('en-US', options).format(date)
}

export default WinnersCampaign
