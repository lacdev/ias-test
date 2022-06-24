import { ReactNode } from 'react'

export interface ButtonProps {
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
  children?: ReactNode | string
}
