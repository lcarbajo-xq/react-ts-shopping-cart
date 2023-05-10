import { ACTION_TYPES } from '../actions/cart'
import { CartProduct, Product } from '../types'

type ActionCart = {
  type: string
  payload: CartProduct | Product | null | undefined
}

// export const cartInitialState =
//   (JSON.parse(window.localStorage.getItem('cart')) as CartProduct[]) || []

export const cartInitialState =
  typeof window.localStorage.getItem('cart') == 'string'
    ? JSON.parse(window.localStorage.getItem('cart'))
    : []

const updateLocalStorage = (state: CartProduct[]) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state: CartProduct[], action: ActionCart) => {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPES.ADD_TO_CART: {
      const product = payload
      if (!product) return state
      const productInCartIndex = state.findIndex(
        (item) => item.id === product.id
      )

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state) as CartProduct[]
        newCart[productInCartIndex].quantity += 1
        updateLocalStorage(newCart)
        return newCart
      }
      const newCart = [...state, { ...product, quantity: 1 }]

      updateLocalStorage(newCart)
      return newCart
    }

    case ACTION_TYPES.REMOVE_FROM_CART: {
      const product = payload
      if (!product) return state
      const newCart = state.filter((item) => item.id !== product.id)
      updateLocalStorage(newCart)
      return newCart
    }

    case ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([])
      return []
    }
    default: {
      return cartInitialState
    }
  }
}
