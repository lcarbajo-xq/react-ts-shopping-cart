import { useReducer } from 'react'
import { ACTION_TYPES } from '../actions/cart'
import { Product } from '../types'
import { cartInitialState, cartReducer } from '../reducers/cart'

export function useCartReducer() {
  const [cart, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product: Product) => {
    return dispatch({ type: ACTION_TYPES.ADD_TO_CART, payload: product })
  }

  const removeFromCart = (product: Product) => {
    return dispatch({ type: ACTION_TYPES.REMOVE_FROM_CART, payload: product })
  }

  const clearCart = () => {
    return dispatch({ type: ACTION_TYPES.CLEAR_CART, payload: null })
  }
  return { cart, addToCart, removeFromCart, clearCart }
}
