import { SearchInputProps } from './SearchInput.types'

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
