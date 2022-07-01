import { SearchInputProps } from './SearchInput.types'
import styles from './SearchInput.module.scss'
import { ChangeEvent } from 'react'

export const SearchInput = ({
  onInputChange,
  value,
  type,
  name,
  id,
  placeholder,
}: SearchInputProps) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value.toLowerCase()
    onInputChange(inputValue)
  }
  return (
    <>
      <input
        className={styles.searchInput}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleSearch}
      />
    </>
  )
}
