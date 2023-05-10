import { Product } from '../types'
import { useFiltersContext } from '../context/useFiltersContext'

export function useFilters() {
  const { filters, setFilters } = useFiltersContext()

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || filters.category === product.category)
      )
    })
  }

  return { filterProducts, filters, setFilters }
}
