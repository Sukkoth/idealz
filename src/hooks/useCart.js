import { Storage } from '../utils/Storage'

function useCart(productId) {
  const carts = Storage.get('carts')
  const userCart = carts?.find(
    cartItem => cartItem?.userId === Storage.get('auth')?.id,
  )

  const product = productId
    ? userCart?.items?.find(item => item.productId === productId)
    : null
  return { carts, userCart, product }
}

export default useCart
