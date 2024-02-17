import useCart from '../hooks/useCart'
import Winner from '../ui/Campaigns/Draws/WinnersCampaign'
import { products } from '../../db.json'
import { useState } from 'react'
import Button from '../ui/Buttons/Button'

function Cart() {
  const { userCart } = useCart()
  const [, reload] = useState(false)

  const productsId = userCart?.items?.map(pr => pr.productId)

  const productsToPass = products
    ?.filter(product => productsId?.includes(product?.id))
    ?.map(product => {
      return {
        productId: product?.id,
        productName: product?.title,
        drawDate: product?.closingTime,
        image: product?.images?.[0],
        tickets: userCart?.items?.find(pr => pr?.productId === product?.id)
          ?.ticketNumbers,
      }
    })
  console.log('🚀 ~ Cart ~ productsToPass:', productsToPass)

  return (
    <div className='min-h-[100dvh]'>
      <h1 className='text-4xl text-rowdies'>Cart</h1>
      <div className='grid grid-cols-2 gap-5 mt-10'>
        {productsToPass?.length > 0 ? (
          productsToPass?.map(item => (
            <Winner
              key={item?.productId}
              winner={item}
              type='cart'
              reload={reload}
            />
          ))
        ) : (
          <h1 className='text-rowdies text-xl'>No cart Items found</h1>
        )}
      </div>
      {productsToPass?.length ? (
        <div className='mt-10'>
          <Button
            type='primary'
            className='w-full'
            onClick={() => alert('Proceed to checkout')}
          >
            Checkout
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Cart
