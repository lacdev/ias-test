import styles from './ErrorMessage.module.scss'
import { ErrorMessageProps } from './ErrorMessage.types'

export const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return <h2 className={styles.errorMessage}>{text}</h2>
}

export default ErrorMessage
