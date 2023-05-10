import { useCartContext } from '../context/useCartContext'

export function useCart() {
  const context = useCartContext()

  return context
}
