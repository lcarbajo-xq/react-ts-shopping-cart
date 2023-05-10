import { ReactNode, createContext, useContext } from 'react'
import { CartProduct, Product } from '../types'
import { useCartReducer } from '../hooks/useCartReducer'

type CartContextType = {
  cart: CartProduct[]
  addToCart: (product: Product) => void
  removeFromCart: (product: Product) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: ReactNode[] }) => {
  const { cart, addToCart, removeFromCart, clearCart } = useCartReducer()
  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const cartContext = useContext(CartContext)
  if (!cartContext) {
    throw new Error('Problem with Cart context!')
  }

  return cartContext
}
