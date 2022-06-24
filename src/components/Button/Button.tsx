import { ButtonProps } from './Button.types'
import styles from './Button.module.scss'

export const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <button className={styles.searchButton} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
