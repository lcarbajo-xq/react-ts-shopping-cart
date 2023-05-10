import { useContext, createContext, ReactElement, useState } from 'react'
import { FiltersState } from '../types'

const initialState: FiltersState = {
  category: 'all',
  minPrice: 0
}

type FiltersContext = {
  filters: FiltersState
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>
}

const FiltersContext = createContext<FiltersContext | null>(null)

export const FiltersContextProvider = ({
  children
}: {
  children: ReactElement
}) => {
  const [filters, setFilters] = useState<FiltersState>(initialState)
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}

export const useFiltersContext = () => {
  const filtersContext = useContext(FiltersContext)

  if (!filtersContext) {
    throw new Error('Problem with filters context!')
  }

  return filtersContext
}
