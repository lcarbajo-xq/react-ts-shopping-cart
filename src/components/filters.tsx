import { ChangeEvent, useId, useState } from 'react'
import './filters.css'
import { FiltersState } from '../types'
import { useFiltersContext } from '../context/useFiltersContext'

// type Props = {
//   changeFilters: React.Dispatch<React.SetStateAction<FiltersState>>
// }

export const Filters = () => {
  const { filters, setFilters } = useFiltersContext()
  const categoryFilterId = useId()
  const minPriceFilterId = useId()

  const { minPrice, category } = filters

  const handleChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value
    }))
  }

  const handleChangeMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: Number(e.target.value)
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Min Price</label>
        <input
          type='range'
          min='0'
          max='5000'
          value={minPrice}
          id={minPriceFilterId}
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Category</label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}
          value={category}>
          <option value='all'>All</option>
          <option value='home-decoration'>Home Decoration</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
