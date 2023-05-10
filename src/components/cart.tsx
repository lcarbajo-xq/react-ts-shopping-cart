import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

export const Cart = () => {
  const cartId = useId()
  const { cart, addToCart, clearCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartId} hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - €{product.price}
                </div>

                <footer>
                  <small>Qty: {product.quantity}</small>
                  <button onClick={() => addToCart(product)}>+</button>
                </footer>
              </li>
            )
          })}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
