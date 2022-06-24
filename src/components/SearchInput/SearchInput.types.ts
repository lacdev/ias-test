import { ChangeEvent } from 'react'

export interface SearchInputProps {
  type: string
  name: string
  id: string
  placeholder: string
  value: string
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}
