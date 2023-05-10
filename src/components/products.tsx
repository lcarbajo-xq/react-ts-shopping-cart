import { useCart } from '../hooks/useCart'
import { Product } from '../types'
import { AddToCartIcon, RemoveFromCartIcon } from './icons'
import './products.css'

export const Products = ({ products }: { products: Product[] }) => {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = (product: Product) =>
    cart.some((item) => item.id === product.id)

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductOnCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: `${isProductOnCart ? 'red' : '#09f'}`
                  }}
                  type='button'
                  onClick={() => {
                    isProductOnCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}>
                  {isProductOnCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
