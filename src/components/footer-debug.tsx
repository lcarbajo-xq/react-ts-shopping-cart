import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'

import './footer.css'
export const FooterDebug = () => {
  const { filters } = useFilters()
  const { cart } = useCart()
  return (
    <footer className='footer'>
      <h4>
        Debug state <span>@louie-dev</span>
      </h4>
      <div>{JSON.stringify(filters)}</div>
      <div>{JSON.stringify(cart)}</div>
    </footer>
  )
}
