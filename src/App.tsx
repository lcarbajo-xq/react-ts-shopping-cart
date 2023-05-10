import { useState } from 'react'
import { Products } from './components/products'
import { products as initialProducst } from './mocks/products.json'
import { Header } from './components/header'
import { FooterDebug } from './components/footer-debug'
import { useFilters } from './hooks/useFilters'
import { IS_DEVELPOMENT } from './config'
import { Cart } from './components/Cart'
import { CartProvider } from './context/useCartContext'

function App() {
  const [products] = useState(initialProducst)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Products products={filteredProducts} />
      <Cart />
      {IS_DEVELPOMENT ? <FooterDebug /> : null}
    </CartProvider>
  )
}

export default App
