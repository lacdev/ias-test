import { SearchInputProps } from './SearchInput.types'
import styles from './SearchInput.module.scss'

export const SearchInput = ({
  onInputChange,
  value,
  type,
  name,
  id,
  placeholder,
}: SearchInputProps) => {
  return (
    <>
      <input
        className={styles.searchInput}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
    </>
  )
}
