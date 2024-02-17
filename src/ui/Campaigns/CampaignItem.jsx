import Button from '../../ui/Buttons/Button'
import PropTypes from 'prop-types'
import CountDown from './CountDown'
import { calculateSecondsDifference } from '../../utils/calculateSeconds'
import { useAuth } from '../../Providers/AuthContext'
import { Storage } from '../../utils/Storage'
import useCart from '../../hooks/useCart'
import { useState } from 'react'

function CampaignItem({ closingTimer, topTag, product }) {
  const { user } = useAuth()
  const { product: cartProduct } = useCart(product.id)
  const quantity = cartProduct?.quantity || 0
  const [, reload] = useState(false)
  console.log('🚀 ~ CampaignItem ~ quantity:', quantity)

  function addToCart() {
    const item = {
      productId: product.id,
      quantity: 1,
      ticketNumbers: [generateTicketNumber(15)],
    }

    let carts = Storage.get('carts') //get all the carts

    //if carts is undefined, give it initial value
    if (!carts?.length) carts = []

    //find specific user cart
    let userCart
    let userHasCart = true

    userCart = carts?.find(cartItem => cartItem?.userId === user?.id)

    //if empty give it initial value

    if (!userCart?.userId || !userCart?.items) {
      userCart = {
        userId: user?.id,
        items: [],
      }
      userHasCart = false
    }

    //add items to cart
    //check if product exists in cart

    const foundInCart = userCart?.items?.find(cartItem => {
      return parseInt(cartItem.productId) === parseInt(product.id)
    })

    if (!foundInCart) {
      userCart.items.push(item)
    } else {
      //increase quantity of existing item by one
      userCart = {
        ...userCart,
        items: userCart.items.map(cartItem =>
          cartItem.productId === item.productId
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                ticketNumbers: [
                  ...cartItem.ticketNumbers,
                  generateTicketNumber(15),
                ],
              }
            : cartItem,
        ),
      }
    }

    //update total carts
    if (carts?.length && userHasCart) {
      carts = carts.map(cart => (cart?.userId === user?.id ? userCart : cart))
    } else {
      carts.push(userCart)
    }
    //write to storage

    Storage.set('carts', carts)
    reload(prev => !prev)
  }

  return (
    <div className='rounded-3xl bg-white p-2 overflow-hidden'>
      {topTag && (
        <div
          id='tag'
          style={{ borderRadius: '1.5rem 1.5rem 0 0 ' }}
          className='bg-yellow-300 relative text-center text-2xl font-extrabold tracking-wide py-2 after:content-[""] after:w-full after:h-[3rem] after:bg-yellow-300 after:absolute after:left-0 after:top-[100%]'
        >
          <h1 className='text-rowdies'>JUST LAUNCHED</h1>
        </div>
      )}

      <div
        className='relative rounded-[2.2rem] p-2 bg-white'
        id='image-with-tag'
      >
        {closingTimer && (
          <CountDown timer={calculateSecondsDifference(product.closingTime)} />
        )}
        <div className='relative rounded-3xl overflow-hidden z-20'>
          <img
            src={`/asset/images/products/${product.images?.[0]}`}
            alt='img'
          />
          <h1 className='mt-[-4rem] z-20 absolute bottom-10 left-3 text-light-red text-[2.5rem]  md:text-[3.5rem] italic font-extrabold'>
            Win
          </h1>
          <p className='left-3 absolute bottom-4  sm:text-[1rem] md:text-[1.3rem] text-white sm:font-extrabold md:font-extrabold'>
            {product?.title}
          </p>
        </div>
      </div>
      <div className='p-2' id='details'>
        <div className='flex gap-2 p-2'>
          <div className='w-[80%]'>
            <h2 className='text-[20px] sm:text-xl sm:w-[60%] md:w-[75%] mb-2'>
              {product?.subtitle}
            </h2>
            <p className='text-[12px] text-stone-400 font-light'>
              Draw date: {formatDate(product.closingTime)} or earlier based on
              the time passed
            </p>
          </div>
          <div className='w-[43%] md:w-[25%] border flex items-center justify-center rounded-2xl p-1'>
            <div className='bg-green-500 text-white text-[10px] text-center rounded-lg'>
              <p className='px-1 font-light'>
                {/* idealbasics products{" "} */}
                <span className='text-[18px] font-bold'>
                  {/* <br /> */}
                  ETB {product?.price}
                </span>{' '}
              </p>
            </div>
          </div>
        </div>
        <Button
          type='primary'
          className={`w-full ${quantity ? ' from-green-500 to-green-500 hover:from-green-300 hover:to-green-500 ' : ''}`}
          onClick={addToCart}
        >
          {!quantity ? 'Add to Cart' : 'Add more to Cart'}
        </Button>
      </div>
    </div>
  )
}

function formatDate(inputDateString) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  const date = new Date(inputDateString)
  return new Intl.DateTimeFormat('en-US', options).format(date)
}

function generateTicketNumber(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let ticketNumber = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    ticketNumber += characters.charAt(randomIndex)
  }

  return ticketNumber
}

CampaignItem.propTypes = {
  closingTimer: PropTypes.bool,
  topTag: PropTypes.bool,
  product: PropTypes.object,
}

export default CampaignItem
