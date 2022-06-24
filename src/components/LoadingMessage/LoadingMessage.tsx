import styles from './LoadingMessage.module.scss'
import { LoadingMessageProps } from './LoadingMessage.types'

export const LoadingMessage = ({ text }: LoadingMessageProps) => {
  return <h2 className={styles.loadingMessage}>{text}</h2>
}

export default LoadingMessage
