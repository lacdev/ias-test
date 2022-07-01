import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export interface SearchInputProps {
  type: string
  name: string
  id: string
  placeholder: string
  value: string
  onInputChange: Dispatch<SetStateAction<string>>
}
