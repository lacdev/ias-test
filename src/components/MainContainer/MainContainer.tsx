import { MainContainerProps } from './MainContainer.types'
import styles from './MainContainer.module.scss'

export const MainContainer = ({ children }: MainContainerProps) => {
  return <div className={styles.mainContainer}>{children}</div>
}
